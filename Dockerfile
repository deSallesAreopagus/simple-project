FROM node:latest
WORKDIR /app
COPY yarn.lock package.json ./
RUN yarn install
COPY . .
RUN yarn build
EXPOSE 4173
CMD ["yarn", "preview", "--host"]