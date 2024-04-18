import dotenv from 'dotenv';

// load environment variables
dotenv.config();

export const {PORT = 8080, NODE_ENV = 'development'} = process.env;

export const IS_PRODUCTION = NODE_ENV === 'production';
export const IS_DEVELOPMENT = NODE_ENV === 'development';
