import express from 'express'; //framework que usamos para crear el servidor.
import path from 'path'; // para manejar las rutas de archivos en el servidor.
import { fileURLToPath } from 'url'; //para obtener la ruta exacta del archivo (especialmente útil en módulos ES6)
import fs from 'fs'; // para leer archivos desde el sistema de archivos del servidor.
import cors from 'cors'; // Habilita el Cross-Origin Resource Sharing, que permite que tu servidor acepte peticiones desde otros dominios.
import dotenv from 'dotenv'; // Carga las variables de entorno desde un archivo .env.
import { emailHandler } from './emailHandler.js'; // Es un archivo separado que gestiona el envío de correos electrónicos.

dotenv.config(); // Carga las variables de entorno desde un archivo .env, lo que es útil para almacenar datos sensibles, como el puerto del servidor o credenciales.

const __filename = fileURLToPath(import.meta.url); // Estas líneas obtienen la ruta actual del archivo donde estás (en ES6).
const __dirname = path.dirname(__filename); //  es el directorio donde está el archivo, necesario para encontrar otros archivos en la computadora.

const app = express(); //  instancia de la aplicación Express, que es como el "objeto" que representa el servidor.
const PORT = process.env.PORT || 5000; // define en qué puerto va a correr el servidor. 

app.use(cors()); // Habilita CORS para permitir que otros dominios accedan a tu servidor
app.use(express.json()); // Permite que el servidor acepte y entienda JSON en las solicitudes HTTP
app.use(express.static(path.join(__dirname, '../public'))); //  Sirve archivos estáticos (como imágenes o HTML) desde el directorio

// API endpoint para obtener los proyectos
app.get('/api/projects', (req, res) => { // Esta ruta responde a una solicitud GET en /api/projects.
    const portfolioDir = path.join(__dirname, '../public/images/portfolio');

    fs.readdir(portfolioDir, (err, files) => { // Lee el contenido de la carpeta portfolio, que contiene imágenes.
        if (err) {
            return res.status(500).json({ error: 'Unable to scan directory' });
        }

        const projects = files
            .filter(file => file.match(/\.(jpg|jpeg|png|gif)$/)) //Filtra solo los archivos de imagen (formatos .jpg, .jpeg, .png, .gif)
            .map((file, index) => ({ //Crea un array de objetos, donde cada archivo es un proyecto con: 
                id: index + 1, // Un identificador único basado en la posición del archivo.
                name: `Proyecto ${index + 1}`, //El nombre del proyecto.
                image: file, //El nombre del archivo de la imagen.
                description: `Descripción del Proyecto ${index + 1}`, //Una descripción básica.
                link: `https://ejemplo${index + 1}.com` //Un enlace ficticio del proyecto
            }));

        res.json(projects); //Luego, la respuesta se envía en formato JSON con todos los proyectos
    });
});

// Nueva ruta para manejar el envío de formularios de contacto
app.post('/api/contact', emailHandler); //Esta ruta responde a solicitudes POST en /api/contact. Cuando alguien envía un formulario de contacto, el emailHandler (que se importa al inicio) gestiona el envío del correo electrónico.

// Maneja cualquier solicitud que no coincida con las rutas anteriores
app.get('*', (req, res) => {  //Este endpoint maneja cualquier otra ruta que no coincida con las anteriores. Si alguien intenta acceder a una ruta no definida, el servidor siempre enviará el archivo index.html
    res.sendFile(path.join(__dirname, '../public/index.html')); 
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); //aquí se inicia el servidor en el puerto definido (5000 o el que esté en tu .env). Cuando el servidor se inicie correctamente, se mostrará un mensaje en la consola: "Server is running on port 5000"
});





//Configuración básica:
//Importas y configuras librerías como Express, CORS y dotenv.
//Definiste el puerto del servidor.

//Middlewares:
//CORS permite que el servidor acepte peticiones de otros dominios.
//express.json() permite que el servidor acepte solicitudes JSON.
//Sirves archivos estáticos desde el directorio public.

//Rutas:
///api/projects: Envía una lista de proyectos con imágenes desde la carpeta portfolio.
///api/contact: Maneja el envío de correos electrónicos usando el formulario de contacto.
// *: Envía el archivo index.html para cualquier ruta no definida, lo que es útil en aplicaciones de una sola página.