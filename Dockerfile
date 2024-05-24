FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 5000
RUN chown -R node /usr/src/app
RUN chown -R node /usr/src/node_modules/prisma && chown -R node /usr/src/node_modules/.prisma
USER node
CMD ["npm", "run", "start:dev"]
