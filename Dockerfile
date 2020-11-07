FROM node:13.12.0-alpine
RUN mkdir /app
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]
