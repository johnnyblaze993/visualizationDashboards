FROM node:20-bullseye

WORKDIR /home/node/app

# Copy package manifests first
COPY package*.json ./

# Install deps
RUN npm install

# Copy rest
COPY . .

# Fix permissions for mounted volumes
RUN chown -R node:node /home/node/app

USER node

EXPOSE 3000

CMD ["sh", "-lc", "npm run dev -- --hostname 0.0.0.0 --port 3000"]
