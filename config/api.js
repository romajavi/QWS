const API_CONFIG = {
    development: {
        API_URL: 'http://localhost:5000'
    },
    production: {
        API_URL: 'https://backend.onrender.com' // Aquí irá la URL del nuevo backend
    }
};

export const API_URL = process.env.NODE_ENV === 'production' 
    ? API_CONFIG.production.API_URL 
    : API_CONFIG.development.API_URL;