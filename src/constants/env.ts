export const {PORT = 8000, NODE_ENV = 'development'} = process.env;

export const IS_PRODUCTION = NODE_ENV === 'production';
