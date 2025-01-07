const API_CONFIG = {
    development: {
        API_URL: 'http://localhost:5001'  
    },
    production: {
        API_URL: 'https://axiondev.tech'  
    }
};

const API_URL = process.env.NODE_ENV === 'production' 
    ? API_CONFIG.production.API_URL 
    : API_CONFIG.development.API_URL;

export { API_URL };