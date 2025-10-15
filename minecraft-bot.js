const mineflayer = require('mineflayer');
const http = require('http');

// Configuration avec variables d'environnement (avec valeurs par défaut)
const BOT_USERNAME = process.env.BOT_USERNAME || 'MinixGuard';
const SERVER_HOST = process.env.SERVER_HOST || 'minixjeux.aternos.me';
const SERVER_PORT = parseInt(process.env.SERVER_PORT || '25565');
const MINECRAFT_VERSION = process.env.MINECRAFT_VERSION || '1.21.4';
const HTTP_PORT = parseInt(process.env.PORT || '5000');
const RECONNECT_DELAY = parseInt(process.env.RECONNECT_DELAY || '30000');
const STATUS_INTERVAL = parseInt(process.env.STATUS_INTERVAL || '300000');

// Variables de suivi
let botInstance = null;
let reconnectTimeout = null;
let statusInterval = null;
let startTime = Date.now();
let reconnectCount = 0;

console.log(`🤖 Démarrage du bot ${BOT_USERNAME}...`);
console.log(`📡 Serveur cible: ${SERVER_HOST}:${SERVER_PORT}`);

// Serveur HTTP pour garder le bot actif sur Replit
const server = http.createServer((req, res) => {
    const uptime = Math.floor((Date.now() - startTime) / 1000);
    const uptimeStr = formatUptime(uptime);
    const status = botInstance ? '✅ Connecté' : '⚠️ Déconnecté';
    
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>MinixGuard Bot Status</title>
            <meta charset="utf-8">
            <meta http-equiv="refresh" content="30">
            <style>
                body { font-family: Arial, sans-serif; max-width: 800px; margin: 50px auto; padding: 20px; }
                .status { padding: 10px; margin: 10px 0; border-radius: 5px; }
                .online { background: #d4edda; color: #155724; }
                .offline { background: #f8d7da; color: #721c24; }
            </style>
        </head>
        <body>
            <h1>🤖 MinixGuard Bot Status</h1>
            <div class="status ${botInstance ? 'online' : 'offline'}">
                <strong>Statut:</strong> ${status}
            </div>
            <p>📡 <strong>Serveur:</strong> ${SERVER_HOST}:${SERVER_PORT}</p>
            <p>👤 <strong>Pseudo:</strong> ${BOT_USERNAME}</p>
            <p>⏱️ <strong>Uptime:</strong> ${uptimeStr}</p>
            <p>🔄 <strong>Reconnexions:</strong> ${reconnectCount}</p>
            <p><small>🔄 Page actualisée automatiquement toutes les 30s</small></p>
        </body>
        </html>
    `);
});

server.listen(HTTP_PORT, '0.0.0.0', () => {
    console.log(`🌐 Serveur HTTP actif sur le port ${HTTP_PORT}`);
});

// Fonction pour formater le temps
function formatUptime(seconds) {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (days > 0) return `${days}j ${hours}h ${minutes}m`;
    if (hours > 0) return `${hours}h ${minutes}m ${secs}s`;
    if (minutes > 0) return `${minutes}m ${secs}s`;
    return `${secs}s`;
}

// Nettoyage des ressources
function cleanup() {
    if (reconnectTimeout) {
        clearTimeout(reconnectTimeout);
        reconnectTimeout = null;
    }
    if (statusInterval) {
        clearInterval(statusInterval);
        statusInterval = null;
    }
}

// Création du bot avec gestion d'erreurs optimisée
function createBot() {
    cleanup();
    
    try {
        botInstance = mineflayer.createBot({
            host: SERVER_HOST,
            port: SERVER_PORT,
            username: BOT_USERNAME,
            version: MINECRAFT_VERSION,
            auth: 'offline',
            hideErrors: false,
            checkTimeoutInterval: 30000,
            keepAlive: true
        });

        // Événement: Connexion réussie
        botInstance.on('login', () => {
            console.log(`✅ ${BOT_USERNAME} connecté au serveur ${SERVER_HOST}`);
            console.log(`🛡️ Le serveur restera actif tant que le bot est connecté`);
        });

        // Événement: Spawn dans le jeu
        botInstance.on('spawn', () => {
            console.log(`📍 ${BOT_USERNAME} est maintenant dans le jeu`);
            
            // Intervalle de statut
            if (statusInterval) clearInterval(statusInterval);
            statusInterval = setInterval(() => {
                if (botInstance && botInstance.entity) {
                    const pos = botInstance.entity.position;
                    console.log(`💚 Bot actif - Position: ${Math.floor(pos.x)}, ${Math.floor(pos.y)}, ${Math.floor(pos.z)} | Santé: ${botInstance.health}/20`);
                }
            }, STATUS_INTERVAL);
        });

        // Gestion des erreurs
        botInstance.on('error', (err) => {
            if (err.message && err.message.includes('unknown chat format')) {
                console.log('💬 [Format de chat non supporté - ignoré]');
            } else {
                console.error('❌ Erreur du bot:', err.message);
            }
        });

        // Événement: Kick du serveur
        botInstance.on('kicked', (reason) => {
            console.log('⚠️ Bot expulsé du serveur:', reason);
            scheduleReconnect();
        });

        // Événement: Fin de connexion
        botInstance.on('end', () => {
            console.log('⚠️ Connexion perdue');
            botInstance = null;
            scheduleReconnect();
        });

        // Événement: Santé
        botInstance.on('health', () => {
            if (botInstance.health <= 6) {
                console.log(`⚠️ Santé faible: ${botInstance.health}/20`);
            }
        });

    } catch (err) {
        console.error('❌ Erreur lors de la création du bot:', err.message);
        scheduleReconnect();
    }
}

// Planifier une reconnexion
function scheduleReconnect() {
    cleanup();
    reconnectCount++;
    console.log(`🔄 Reconnexion #${reconnectCount} dans ${RECONNECT_DELAY/1000} secondes...`);
    reconnectTimeout = setTimeout(createBot, RECONNECT_DELAY);
}

// Gestion des erreurs non capturées
process.on('uncaughtException', (err) => {
    if (err.message && err.message.includes('unknown chat format')) {
        console.log('💬 [Message reçu - format non supporté, ignoré]');
    } else {
        console.error('❌ Erreur non gérée:', err.message);
    }
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('❌ Promesse rejetée non gérée:', reason);
});

// Nettoyage lors de l'arrêt
process.on('SIGINT', () => {
    console.log('\n⏹️ Arrêt du bot...');
    cleanup();
    if (botInstance) {
        botInstance.quit();
    }
    process.exit(0);
});

// Démarrage
createBot();
