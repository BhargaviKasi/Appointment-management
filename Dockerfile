FROM node:14.15.4-alpine3.12

# Dependencies for chrome

RUN apk update && apk upgrade && \
    echo @edge http://nl.alpinelinux.org/alpine/edge/community >> /etc/apk/repositories && \
    echo @edge http://nl.alpinelinux.org/alpine/edge/main >> /etc/apk/repositories && \ 
    apk add --no-cache curl jq python3 py3-pip && \
    apk add --no-cache \
      yarn \
      bash \
      git \
      openssh \
      build-base \
      gcc \
      wget

# Creating App Directory
RUN mkdir /appointment-management
WORKDIR /appointment-management

# Installing app dependencies
RUN yarn global add @angular/cli@11.0.5 pm2
COPY package.json /appointment-management
RUN yarn install

# Bundle App Source
COPY . /appointment-management

RUN /usr/local/bin/ng build --prod --aot --source-map=false --build-optimizer=true

EXPOSE 3002

COPY ./run.sh /appointment-management
ENTRYPOINT ["/appointment-management/run.sh"]

