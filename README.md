# 🤖 MinixGuard - Bot Minecraft

Bot Minecraft optimisé pour garder votre serveur Aternos actif 24h/24.

## 🎯 Fonction

MinixGuard reste connecté en permanence sur votre serveur Minecraft pour empêcher Aternos de le fermer automatiquement après 5 minutes d'inactivité.

## ✨ Caractéristiques

- ✅ **Connexion automatique** au serveur Minecraft
- ✅ **Reconnexion intelligente** en cas de déconnexion ou kick
- ✅ **Monitoring en temps réel** via interface web
- ✅ **Configuration flexible** via variables d'environnement
- ✅ **Déploiement facile** sur Replit (reste actif 24/7)
- ✅ **Gestion optimisée** de la mémoire et des ressources

## 🚀 Démarrage rapide

### Option 1 : Render.com - GRATUIT 24/7 ⭐ (Recommandé)

Déployez gratuitement et gardez le bot actif en permanence !

👉 **[Suivez le guide de déploiement Render.com](DEPLOIEMENT_RENDER.md)**

**Avantages :**
- ✅ 100% gratuit
- ✅ Actif 24/7 (avec un simple ping automatique)
- ✅ Configuration facile
- ✅ Logs en temps réel

### Option 2 : Sur Replit

1. Le bot est déjà configuré et prêt à l'emploi
2. Cliquez sur le bouton **Run** pour démarrer le bot
3. ⚠️ Le bot s'arrête quand vous fermez la page
4. Pour 24/7 payant : Cliquez sur **Deploy** → **Reserved VM**

### Option 3 : En local

```bash
npm install
npm start
```

## ⚙️ Configuration

Le bot utilise des variables d'environnement avec des valeurs par défaut :

| Variable | Défaut | Description |
|----------|--------|-------------|
| `BOT_USERNAME` | MinixGuard | Pseudo du bot dans Minecraft |
| `SERVER_HOST` | minixjeux.aternos.me | Adresse du serveur |
| `SERVER_PORT` | 25565 | Port du serveur |
| `MINECRAFT_VERSION` | 1.21.4 | Version de Minecraft |
| `RECONNECT_DELAY` | 30000 | Délai de reconnexion (ms) |
| `STATUS_INTERVAL` | 300000 | Intervalle des logs de statut (ms) |

Pour modifier la configuration, créez un fichier `.env` ou définissez les variables d'environnement dans les paramètres Replit.

## 📊 Monitoring

Une fois le bot démarré, accédez à l'interface web pour voir :
- ✅ Statut de connexion (Connecté/Déconnecté)
- 📡 Informations du serveur
- ⏱️ Temps de fonctionnement (uptime)
- 🔄 Nombre de reconnexions

L'interface se rafraîchit automatiquement toutes les 30 secondes.

## 🛠️ Technologies

- **Node.js** - Runtime JavaScript
- **Mineflayer** - Bibliothèque pour bots Minecraft
- **HTTP** - Serveur web intégré pour monitoring

## 📝 Logs

Le bot affiche des logs détaillés :
- 🤖 Démarrage et configuration
- ✅ Connexion réussie
- 📍 Spawn dans le jeu
- 💚 Statut périodique (position, santé)
- ⚠️ Déconnexions et reconnexions
- ❌ Erreurs éventuelles

## 🔧 Optimisations

- **Gestion d'erreurs robuste** : Le bot gère automatiquement les erreurs de connexion
- **Reconnexion intelligente** : Tentatives automatiques toutes les 30 secondes
- **Nettoyage des ressources** : Prévient les fuites mémoire et les doublons
- **Heartbeat automatique** : Maintient la connexion active
- **Logs optimisés** : Format de chat inconnu ignoré pour éviter le spam

## 🚀 Déploiement sur Replit

### Méthode 1 : Always-On (Gratuit avec limitations)
1. Ouvrez votre Repl
2. Le bot démarre automatiquement
3. Il reste actif tant que vous ne fermez pas Replit

### Méthode 2 : Deployment (Recommandé pour 24/7)
1. Cliquez sur **Deploy** dans Replit
2. Choisissez **Reserved VM** pour une disponibilité continue
3. Le bot restera actif 24h/24, 7j/7

## 📄 Licence

Ce projet est open source. Libre d'utilisation et de modification.

## 🤝 Contribution

N'hésitez pas à améliorer le bot ! Pull requests bienvenues.

## ❓ Support

En cas de problème :
1. Vérifiez que le serveur Minecraft est en ligne
2. Consultez les logs pour identifier l'erreur
3. Vérifiez la configuration (pseudo, adresse, version)
