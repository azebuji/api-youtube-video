module.exports = {
    apps: [{
        name: "nome do serviço",
        script: "./dist/src/server.js",
        exec_mode: 'cluster',
        watch: false,
        env_production: {
            NODE_ENV: "development",
            DB_CLIENT: "pg",
            DB_NAME: "",
            DB_HOST: "localhost",
            DB_USER: "postgres",
            DB_PORT: 5432,
            DB_PASSWORD: "",
            JWT_API_SECRET: '',
            API_NAME: 'nome da api',
            API_PORT: 9070,
            URL_FRONT: '',
            DATABASE_URL: "postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"

        }
    }]

}

