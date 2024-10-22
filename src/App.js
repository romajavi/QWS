import React, { Suspense, lazy } from 'react'; //heramientas de la caja
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; //rutas que tiene la aplicación
import { ThemeProvider } from 'styled-components'; // el pintor de la casa
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import LoadingSpinner from './components/LoadingSpinner.js';
import PageTransition from './components/PageTransition.js';


//Suspense y lazy son como herramientas especiales dentro de la caja. Son las que nos permiten cargar ciertas partes de la aplicación solo cuando realmente se necesitan, como si guardáramos una pieza para usarla más tarde. Esto ayuda a que la página cargue más rápido.

//BrowserRouter (renombrado como Router) es como el mapa de caminos o las rutas que tiene tu aplicación. Te permite moverte entre diferentes páginas (o secciones) dentro de tu web.

//Route y Routes son como señales en ese mapa que dicen: "Si estás en esta parte de la ruta, muestra esta página". Cada ruta define qué se muestra en cada dirección (URL) de la web.

//ThemeProvider es como el pintor de la casa. Te permite establecer un tema de colores y estilos para toda tu aplicación. Así que en vez de tener que pintar cada habitación por separado, puedes decirle al pintor que use los mismos colores y estilos en todas partes.

//styled es como una herramienta que te permite crear piezas personalizadas para la decoración (los estilos) de tu casa. Te ayuda a diseñar cada componente con un estilo único, como decir: "Quiero que este botón sea rojo y que crezca cuando lo presione".

//GlobalStyles es un conjunto de reglas de estilo que se aplican a toda la página, como si dijeras: "Todas las puertas de la casa serán de madera". Define estilos que afectan a todo el sitio de manera global.

//Header y Footer son componentes que representan el encabezado y el pie de página de tu aplicación. Son como las partes fijas de la casa que siempre estarán visibles sin importar en qué página estés.

//LoadingSpinner es una pieza especial que aparece cuando algo está cargando en tu página. Imagina que mientras un cuarto de la casa se está terminando de construir, pones un cartel de "En construcción" o "Cargando". Eso es lo que hace el LoadingSpinner.

//PageTransition es como un efecto que ocurre cuando pasas de una página a otra, como si las puertas de tu casa se abrieran y cerraran con un estilo especial. Te permite animar la transición entre páginas de una forma más fluida y agradable.


//Tienes tus herramientas principales (React) y algunas herramientas extra para cargar partes de la página cuando se necesitan (Suspense, lazy).
//Router es tu mapa de caminos, y Route/Routes son las señales que te guían por diferentes páginas.
//ThemeProvider y styled-components son los encargados de dar estilo y color a toda tu casa (página).
//GlobalStyles son reglas de estilo que afectan todo el diseño.
//Header y Footer son como las partes fijas de tu aplicación (el techo y los cimientos).
//LoadingSpinner es lo que se muestra mientras algo está en construcción, y PageTransition son los efectos que hacen que todo se vea más fluido cuando cambias de página.







// Lazy loading for pages
const Home = lazy(() => import('./pages/Home.js'));
const Services = lazy(() => import('./pages/Services.js'));
const Portfolio = lazy(() => import('./pages/Portfolio.js'));
const Blog = lazy(() => import('./pages/Blog.js'));
const Contact = lazy(() => import('./pages/Contact.js'));

const theme = {
    colors: {
        primary: '#FFD700',    // Amarillo dorado
        secondary: '#FFA500',  // Naranja
        background: '#000000', // Negro
        text: '#FFFFFF',       // Blanco
        accent: '#00FFFF',     // Cian
        buttonText: '#000000', // Negro
        primaryBackground: '#333333', // Gris oscuro
        secondaryBackground: '#a5aa9a', // Gris medio vizon
    },
    fonts: {
        main: "'Orbitron', sans-serif",
        secondary: "'Roboto', sans-serif",
    },
    effects: {
        glow: '0 0 5px rgba(0, 255, 255, 0.5)',
        gradient: 'linear-gradient(45deg, #FFD700, #00FFFF)',
    }
};


//Lazy loading: En lugar de cargar todas las páginas de una vez, solo cargamos lo necesario cuando el usuario lo pide. Esto hace que la aplicación sea más rápida y eficiente.
//Ejemplo: Solo armamos la habitación (Home, Services, Portfolio, etc.) cuando alguien entra en ella.
//theme: Es como definir un estilo de decoración para toda la casa (página).
//colors: Defines los colores principales y secundarios que usarás en toda la aplicación.
//fonts: Estableces las fuentes (tipografías) que usarás para los textos.





const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: space-between; // Esto ayudará a que el footer se mantenga al final
`;

//AppWrapper: Es el contenedor principal que organiza la estructura de la página.
//Usa flexbox para organizar los elementos.
//Coloca los elementos en una columna (uno encima de otro).
//Se asegura de que el footer esté siempre al final de la página.



const ContentWrapper = styled.main`
    display: flex;
    flex: 1 0 auto;
    flex-direction: column;
`;

//contentwrapper: Es el contenedor donde va el contenido principal.
//Usa flexbox para organizar el contenido de manera lexible.
//El contenido puede crecer y ocupar todo el espacio disponible, pero no se achicar menos de lo necesario.


function AnimatedRoutes() { // transición de las paginas
    return (
        <PageTransition>
            <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Suspense>
        </PageTransition>
    );
}

//Usa transiciones animadas (PageTransition) para que el cambio entre páginas sea suave.
//Carga las páginas de manera diferida con Suspense, mostrando un spinner si aún no están listas.
//Define el mapa de rutas con Routes para decir qué página mostrar en cada URL.



function App() { //estructura de las paginas
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Router>
                <AppWrapper>
                    <Header />
                    <ContentWrapper>
                        <AnimatedRoutes />
                    </ContentWrapper>
                    {/* <Footer /> */}
                </AppWrapper>
            </Router>
        </ThemeProvider>
    );
}

//Aplica el tema (colores y fuentes) con ThemeProvider.
//Usa GlobalStyles para aplicar los estilos globales a toda la página.
//Estructura la página con AppWrapper, incluyendo el header, el espacio donde se muestra el contenido (ContentWrapper), y el footer..

export default App;