# MinixGuard - Bot Minecraft

## 📋 Vue d'ensemble

Bot Minecraft optimisé qui garde votre serveur Aternos actif en permanence. Le bot se connecte automatiquement au serveur et gère les reconnexions en cas de déconnexion.

## 🎯 Objectif

Empêcher Aternos de fermer automatiquement le serveur après 5 minutes d'inactivité en maintenant une connexion active 24h/24.

## ✨ Fonctionnalités

- **Connexion automatique** au serveur Minecraft
- **Reconnexion intelligente** avec délai configurable (défaut : 30 secondes)
- **Interface web de monitoring** sur le port 5000
- **Gestion optimisée des ressources** (mémoire, timers, connexions)
- **Logs détaillés** avec émojis pour faciliter le suivi
- **Configuration flexible** via variables d'environnement

## 🏗️ Architecture du projet

```
.
├── minecraft-bot.js       # Bot Minecraft principal
├── package.json           # Dépendances Node.js
├── .gitignore            # Fichiers ignorés par Git
├── README.md             # Documentation utilisateur
└── replit.md             # Documentation technique (ce fichier)
```

## ⚙️ Configuration actuelle

### Serveur Minecraft
- **Hôte** : minixjeux.aternos.me
- **Port** : 25565
- **Version** : 1.21.4
- **Mode** : Offline (crack autorisé)
- **Pseudo du bot** : MinixGuard

### Serveur HTTP (Monitoring)
- **Port** : 5000
- **Type** : Interface web avec statut en temps réel
- **Rafraîchissement** : Automatique toutes les 30 secondes

### Workflow Replit
- **Nom** : Bot Minecraft
- **Commande** : `node minecraft-bot.js`
- **Port** : 5000
- **Type** : webview

### Déploiement
- **Type** : Reserved VM
- **Commande** : `node minecraft-bot.js`
- **Disponibilité** : 24/7

## 📊 Variables d'environnement

| Variable | Valeur par défaut | Description |
|----------|-------------------|-------------|
| BOT_USERNAME | MinixGuard | Pseudo du bot |
| SERVER_HOST | minixjeux.aternos.me | Adresse du serveur |
| SERVER_PORT | 25565 | Port Minecraft |
| MINECRAFT_VERSION | 1.21.4 | Version du jeu |
| PORT | 5000 | Port du serveur HTTP |
| RECONNECT_DELAY | 30000 | Délai reconnexion (ms) |
| STATUS_INTERVAL | 300000 | Intervalle des logs (ms) |

## 🔧 Optimisations implémentées

### Gestion des erreurs
- Capture des erreurs non gérées (uncaughtException, unhandledRejection)
- Gestion spécifique des formats de chat inconnus
- Logs d'erreurs détaillés sans planter le processus

### Gestion de la reconnexion
- Cleanup automatique des timers avant chaque reconnexion
- Évite les doublons de connexion
- Compteur de reconnexions pour monitoring

### Gestion des ressources
- Nettoyage des intervalles et timeouts
- Libération de la mémoire lors des reconnexions
- Handler SIGINT pour arrêt propre

### Monitoring
- Interface web avec métriques en temps réel
- Uptime formaté (jours, heures, minutes)
- Statut de connexion visuel (couleurs)
- Compteur de reconnexions

## 📝 Historique des modifications

### 14 octobre 2025 - Optimisation complète
- ✅ **Supprimé** : Tout le code Discord (main.py, dépendances Python)
- ✅ **Optimisé** : Code du bot Minecraft avec meilleure gestion des erreurs
- ✅ **Ajouté** : Variables d'environnement pour configuration flexible
- ✅ **Ajouté** : Interface web de monitoring améliorée
- ✅ **Ajouté** : Gestion optimisée des ressources et reconnexions
- ✅ **Configuré** : Workflow Replit sur port 5000
- ✅ **Configuré** : Déploiement Replit VM pour disponibilité 24/7
- ✅ **Nettoyé** : Structure du projet et fichiers inutiles

## 🚀 Comment utiliser

### Démarrage local
```bash
node minecraft-bot.js
```

### Démarrage sur Replit
1. Cliquez sur **Run** (le workflow démarre automatiquement)
2. Accédez à l'interface web pour voir le statut
3. Pour un déploiement 24/7, cliquez sur **Deploy**

### Modification de la configuration
1. Créez un fichier `.env` avec vos variables
2. Ou définissez les secrets dans les paramètres Replit
3. Redémarrez le bot

## 🛡️ Sécurité

- Aucun secret n'est hardcodé dans le code
- Variables sensibles gérées via environnement
- Serveur HTTP basique sans données sensibles

## 📚 Dépendances

- **mineflayer** : ^4.25.0 - Bibliothèque pour créer des bots Minecraft
- **Node.js** : >=18.x - Runtime JavaScript

## 🎯 Prochaines étapes possibles

1. ✨ Ajouter un endpoint JSON pour métriques (/api/status)
2. 📊 Implémenter un backoff exponentiel pour les reconnexions
3. 🔔 Ajouter des webhooks pour notifications
4. 💾 Logger les événements dans un fichier
5. 🎮 Ajouter des commandes Minecraft interactives

## 🐛 Debugging

Si le bot ne se connecte pas :
1. Vérifiez que le serveur Minecraft est démarré (Aternos)
2. Consultez les logs du workflow
3. Vérifiez la configuration (adresse, port, version)
4. Testez la connexion manuellement avec Minecraft

## 📞 Notes

- Le bot utilise le mode **offline** (pas besoin de compte Mojang)
- Compatible avec les serveurs **crackés**
- Fonctionne sur les serveurs **Aternos** et autres hébergeurs
- L'erreur ECONNRESET est normale si le serveur est éteint
