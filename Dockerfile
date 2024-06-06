FROM node:lts-alpine AS builder

WORKDIR /app

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
COPY tsconfig*.json ./
COPY prisma ./prisma/

RUN npm install --production --silent
RUN npx prisma generate
COPY . .
RUN npm run build

FROM node:lts-alpine

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

EXPOSE 5000

CMD ["npm", "run", "start:migrate:prod"]
