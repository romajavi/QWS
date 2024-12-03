import React from 'react'; ///caja de herramientas
import ReactDOM from 'react-dom/client' ///contructor 
import App from './App.js'; //diseño a construir


const root = ReactDOM.createRoot(document.getElementById('root')); // construye dentro de este espacio especifico, "root" dentro de html
root.render( /// hace que todo lo que aparezca en sección aparezca en la pantalla 
    <React.StrictMode> 
        <App />  
    </React.StrictMode>
);

//<React.StrictMode> supervisor de calidad
//<App/> muestra la aplicación