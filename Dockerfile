# pull image
FROM node:16.15.1

LABEL version="1.0"
LABEL description="Just another react form"

# set working directory
WORKDIR /mnt

# add `/mnt/node_modules/.bin` to $PATH
ENV PATH /mnt/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

# add app
COPY . ./

# start app
CMD ["npm", "start"]

# port 9090
EXPOSE 9090
