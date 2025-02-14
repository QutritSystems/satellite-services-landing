# Build stage
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM caddy:2
COPY --from=builder /app/build /srv
COPY Caddyfile /etc/caddy/Caddyfile
