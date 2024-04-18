import dotenv from 'dotenv';

// load environment variables
dotenv.config();

export const {PORT = 8080} = process.env;
