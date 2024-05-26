module.exports = {
    apps: [{
        name: "api-youtube-videos",
        script: "./dist/src/server.js",
        exec_mode: 'cluster',
        watch: false,
        env_production: {

            NODE_ENV: "production",
            DB_CLIENT: "pg",
            DB_NAME: "db_youtube_app",
            DB_HOST: "localhost",
            DB_USER: "postgres",
            DB_PORT: 5432,
            DB_PASSWORD: "root",
            JWT_API_SECRET: 'teste',
            API_NAME: 'Api de videos do youtube',
            API_PORT: 9070,
            GOOGLE_YOUTUBE_API_URL: 'https://www.googleapis.com/youtube/v3/',
            DATABASE_URL: "postgresql://postgres:root@localhost:5432/db_youtube_app?schema=public",
            GOOGLEKEY: 'AIzaSyC5-hJVH0NH9xHL-Tfxeuc9a517NJ4KG3I'
        },
        env_development: {
            NODE_ENV: "development",
            DB_CLIENT: "pg",
            DB_NAME: "db_youtube_app",
            DB_HOST: "localhost",
            DB_USER: "postgres",
            DB_PORT: 5432,
            DB_PASSWORD: "root",
            JWT_API_SECRET: 'teste',
            API_NAME: 'Api de videos do youtube',
            API_PORT: 9070,
            GOOGLE_YOUTUBE_API_URL: 'https://www.googleapis.com/youtube/v3/',
            DATABASE_URL: "postgresql://postgres:root@localhost:5432/db_youtube_app?schema=public",
            GOOGLEKEY: 'AIzaSyC5-hJVH0NH9xHL-Tfxeuc9a517NJ4KG3I'
        },
    }]

}

