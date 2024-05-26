FROM node:18.13.0
WORKDIR /api-youtube-video
COPY . .
RUN npm install
EXPOSE 9070 
CMD ["npm","run", "execute"]