# Utiliser une image de base officielle de Node.js
FROM node:18-alpine

# Créer un répertoire de travail
WORKDIR /app

# Copier les fichiers de configuration
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Exposer le port que le serveur Express utilise
EXPOSE 3000

# Commande pour démarrer le serveur Express
CMD ["node", "app.js"]