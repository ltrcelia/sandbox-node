# Utiliser une image de base officielle de Node.js
FROM node:18-alpine AS build

# Créer un répertoire de travail
WORKDIR /app

# Copier les fichiers de configuration
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Construire l'application React
RUN npm run build

# Utiliser une image de base Nginx pour servir les fichiers construits
FROM nginx:alpine

# Copier les fichiers construits dans le répertoire de Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exposer le port 80 pour Nginx
EXPOSE 80

# Commande pour démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]