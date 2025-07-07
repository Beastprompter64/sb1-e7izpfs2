# Étape 1 : build React avec Vite
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Étape 2 : Nginx pour servir le build
FROM nginx:stable-alpine

# Copier les fichiers buildés
COPY --from=builder /app/dist /usr/share/nginx/html

# Ajouter une config nginx pour SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
