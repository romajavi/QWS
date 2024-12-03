// src/config/api.js
const API_CONFIG = {
    development: {
        API_URL: 'http://localhost:5001'  
    },
    production: {
        API_URL: 'http://localhost:5001'
    }
};

export const API_URL = process.env.REACT_APP_API_URL ||
    (process.env.NODE_ENV === 'production'
        ? API_CONFIG.production.API_URL
        : API_CONFIG.development.API_URL);