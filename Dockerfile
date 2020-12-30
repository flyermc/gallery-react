FROM node:13.12.0-alpine as build-stage

ARG APP_DIR=/var/app
WORKDIR ${APP_DIR}
ENV PATH ${APP_DIR}/node_modules/.bin:$PATH
COPY package.json ${APP_DIR}/
COPY package-lock.json ${APP_DIR}/
COPY nginx.conf ${APP_DIR}/

RUN npm install --silent
# RUN npm run build
COPY . ${APP_DIR}/

RUN yarn build

FROM nginx:1.19

COPY --from=build-stage /var/app/build /usr/share/nginx/html
COPY --from=build-stage /var/app/nginx.conf /etc/nginx/nginx.conf
