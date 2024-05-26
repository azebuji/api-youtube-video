//Arquivo responsável por dar tipos ao process.env

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      API_PORT: number;
      DB_PORT: number;
      PWD: string;
      DB_NAME: string;
      DB_HOST: string;
      DB_USER: string;
      DB_PASSWORD: string;
      JWT_API_SECRET: string;
      API_NAME: string;
      GOOGLE_YOUTUBE_API_URL: string;
      GOOGLEKEY: string;
      KEY_FOR_ASSAS: string;
    }
  }
}

export { }