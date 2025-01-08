const API_CONFIG = {
    development: {
        API_URL: 'http://localhost:5000'
    },
    production: {
        API_URL: 'https://axiondev.tech'  // Volvemos a la URL de producción real
    }
};

console.log('Current environment:', process.env.NODE_ENV);
console.log('REACT_APP_API_URL:', process.env.REACT_APP_API_URL);

export const API_URL = process.env.REACT_APP_API_URL ||
    (process.env.NODE_ENV === 'production'
        ? API_CONFIG.production.API_URL
        : API_CONFIG.development.API_URL);

console.log('API URL being used:', API_URL);