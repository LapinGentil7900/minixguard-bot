# 🚀 Déploiement sur Render.com (Gratuit 24/7)

Guide pour déployer MinixGuard sur Render.com et le garder actif gratuitement en permanence.

## 📋 Prérequis

1. Un compte GitHub (gratuit)
2. Un compte Render.com (gratuit)

## 🔧 Étape 1 : Préparer votre code sur GitHub

### Option A : Depuis Replit (Recommandé)
1. Dans Replit, cliquez sur l'icône **Git** (à gauche)
2. Créez un nouveau repository GitHub
3. Faites un commit et push de votre code

### Option B : Manuellement
1. Allez sur [github.com](https://github.com) et créez un nouveau repository
2. Téléchargez votre projet depuis Replit
3. Uploadez les fichiers sur GitHub

## 🚀 Étape 2 : Déployer sur Render

### Méthode 1 : Avec le fichier render.yaml (Automatique)

1. **Allez sur [render.com](https://render.com)** et connectez-vous
2. Cliquez sur **"New +"** → **"Blueprint"**
3. Connectez votre repository GitHub
4. Render détectera automatiquement le fichier `render.yaml`
5. Cliquez sur **"Apply"**
6. Votre bot démarre automatiquement ! 🎉

### Méthode 2 : Configuration manuelle

1. **Allez sur [render.com](https://render.com)** et connectez-vous
2. Cliquez sur **"New +"** → **"Web Service"**
3. Connectez votre repository GitHub
4. Remplissez les informations :

   **Configuration de base :**
   - **Name** : `minixguard-bot` (ou votre choix)
   - **Runtime** : `Node`
   - **Build Command** : `npm install`
   - **Start Command** : `node minecraft-bot.js`
   - **Plan** : `Free`

   **Variables d'environnement :**
   Cliquez sur "Advanced" puis ajoutez ces variables :
   
   | Clé | Valeur |
   |-----|--------|
   | `BOT_USERNAME` | `MinixGuard` |
   | `SERVER_HOST` | `minixjeux.aternos.me` |
   | `SERVER_PORT` | `25565` |
   | `MINECRAFT_VERSION` | `1.21.4` |
   | `PORT` | `10000` |
   | `RECONNECT_DELAY` | `30000` |
   | `STATUS_INTERVAL` | `300000` |

5. Cliquez sur **"Create Web Service"**
6. Render va construire et déployer votre bot automatiquement ! 🚀

## ✅ Étape 3 : Vérifier que tout fonctionne

1. Sur Render, allez dans l'onglet **"Logs"**
2. Vous devriez voir :
   ```
   🤖 Démarrage du bot MinixGuard...
   🌐 Serveur HTTP actif sur le port 10000
   ✅ MinixGuard connecté au serveur minixjeux.aternos.me
   📍 MinixGuard est maintenant dans le jeu
   ```

3. Cliquez sur l'URL fournie par Render (ex: `https://minixguard-bot.onrender.com`)
4. Vous verrez l'interface de monitoring du bot ! 🎉

## 🎯 Important à savoir

### ⚠️ Limitation du plan gratuit Render
- Le service **se met en veille après 15 minutes d'inactivité**
- Il redémarre automatiquement dès qu'il reçoit une requête HTTP

### ✅ Solution : Ping automatique
Pour garder le bot actif 24/7, utilisez un service de ping gratuit :

1. **Cron-job.org** (recommandé)
   - Allez sur [cron-job.org](https://cron-job.org)
   - Créez un compte gratuit
   - Créez un nouveau cron job :
     - **URL** : Votre URL Render (ex: `https://minixguard-bot.onrender.com`)
     - **Intervalle** : Toutes les 14 minutes
   - Le bot restera actif 24/7 ! ✅

2. **UptimeRobot** (alternative)
   - Allez sur [uptimerobot.com](https://uptimerobot.com)
   - Créez un compte gratuit
   - Ajoutez un monitor HTTP(S)
   - **URL** : Votre URL Render
   - **Interval** : 5 minutes
   - Le bot restera toujours actif ! ✅

## 🔧 Modifier la configuration

Pour changer les paramètres du bot :
1. Allez dans votre service Render
2. Cliquez sur **"Environment"**
3. Modifiez les variables d'environnement
4. Le bot redémarrera automatiquement

## 📊 Surveiller votre bot

- **Logs en temps réel** : Onglet "Logs" sur Render
- **Interface web** : Visitez l'URL de votre service
- **Statut** : Onglet "Events" pour voir l'historique

## 🆓 Coût

**100% GRATUIT !**
- Render.com : Plan gratuit (750h/mois, largement suffisant)
- Cron-job.org : Gratuit pour toujours
- Votre bot reste actif 24/7 sans payer un centime ! 🎉

## ❓ Problèmes courants

### Le bot se déconnecte
- Vérifiez que le serveur Aternos est démarré
- Consultez les logs Render pour voir les erreurs

### Le service s'endort
- Ajoutez un ping automatique avec Cron-job.org ou UptimeRobot

### Erreur de build
- Vérifiez que `package.json` est bien présent
- Les logs Render montrent l'erreur exacte

## 🎉 C'est tout !

Votre bot MinixGuard tourne maintenant 24/7 gratuitement sur Render.com ! 🚀

Le serveur Aternos restera toujours actif grâce au bot.
