FROM node:10.18
RUN mkdir /home/node/app && chown node:node /home/node/app
RUN mkdir /home/node/app/node_modules && chown node:node /home/node/app/node_modules
WORKDIR  /home/node/app
RUN npm install -g @angular/cli@8.1.2 
USER node
COPY --chown=node:node package.json package-lock.json ./
COPY --chown=node:node . .
RUN npm install
