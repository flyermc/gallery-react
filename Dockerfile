FROM node:13.12.0-alpine

ARG APP_DIR=/var/app
WORKDIR ${APP_DIR}
ENV PATH ${APP_DIR}/node_modules/.bin:$PATH
COPY package.json ${APP_DIR}/
COPY package-lock.json ${APP_DIR}/

RUN npm install --silent
RUN npm run build
COPY . ${APP_DIR}/

CMD ["yarn", "start"]