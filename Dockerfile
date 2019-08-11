FROM node:12.5.0-slim

ENV APP_PATH /srv/app/

WORKDIR $APP_PATH

RUN curl -o- -L https://yarnpkg.com/install.sh | bash
COPY package.json yarn.lock $APP_PATH

COPY . $APP_PATH

RUN yarn global add nodemon
RUN yarn install --pure-lockfile

EXPOSE 3000
