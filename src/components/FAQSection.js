import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const FAQContainer = styled.section`
  margin: 4rem auto;
  max-width: 800px;
  padding: 2rem;
  width: 100%;
  scroll-margin-top: 120px;
  
  @media (max-width: 768px) {
    padding: 1rem;
    margin: 2rem auto;
  }
`;

const FAQTitle = styled.h2`
  color: ${props => props.theme.colors.primary};
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2rem;
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.2);
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const FAQItem = styled.div`
  margin-bottom: 1.5rem;
  background: ${props => props.theme.colors.cardBackground};
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid ${props => props.theme.colors.accent}30;
  width: 100%;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 4px 20px rgba(0, 255, 255, 0.1);
  }
`;

const Question = styled(motion.div)`
  padding: 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.theme.colors.text};
  font-weight: bold;
  transition: background 0.3s ease;
  background: ${props => props.isOpen ? `${props.theme.colors.accent}10` : 'transparent'};

  &:hover {
    background: ${props => `${props.theme.colors.accent}10`};
  }
`;

const Answer = styled(motion.div)`
  padding: 1.5rem;
  color: ${props => props.theme.colors.text}CC;
  line-height: 1.6;
  background: ${props => props.theme.colors.background}40;
  width: 100%;
  max-width: 100%;
  overflow-wrap: break-word;
  border-top: 1px solid ${props => props.theme.colors.accent}20;
  overflow: hidden;
`;

const CategoryTitle = styled.h3`
  color: ${props => props.theme.colors.accent};
  margin: 2rem 0 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${props => props.theme.colors.accent}30;
  font-size: 1.5rem;
  text-transform: capitalize;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin: 1.5rem 0 1rem;
  }
`;

const ArrowIcon = styled(motion.span)`
  color: ${props => props.theme.colors.accent};
  font-size: 1.2rem;
`;

const CategorySection = styled.div`
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }
`;


const faqData = {
    conceptos: [
        {
            question: "¿Qué es un dominio web?",
            answer: "Un dominio web es el nombre único que identifica a tu sitio en Internet, como 'mipagina.com'. Es la dirección que los usuarios escriben en el navegador para visitar tu sitio. Los dominios se registran por períodos de 1 año y pueden renovarse anualmente para mantener la propiedad."
        },
        {
            question: "¿Qué es el hosting y por qué lo necesito?",
            answer: "El hosting o alojamiento web es el espacio en un servidor donde se almacenan todos los archivos de tu sitio web (imágenes, texto, código, etc.). Es esencial para que tu sitio esté accesible en Internet. Los planes suelen contratarse anualmente e incluyen características como SSL y backups según el plan elegido."
        },
        {
            question: "¿Qué es un certificado SSL?",
            answer: "El SSL es un certificado de seguridad que protege la comunicación entre el usuario y el servidor. Cuando tu sitio tiene SSL, su dirección comienza con 'https://' y muestra un candado, lo que aumenta la confianza de los usuarios. Es importante para la seguridad y el SEO, y debe renovarse anualmente."
        },
        {
            question: "¿Qué es SEO y por qué es importante?",
            answer: "El SEO (Optimización para Motores de Búsqueda) es el proceso de mejorar tu sitio web para que aparezca mejor posicionado en Google y otros buscadores. Incluye optimización de palabras clave, enlaces, velocidad del sitio y otros factores. Un buen SEO ayuda a que más personas encuentren tu sitio naturalmente."
        },
        {
            question: "¿Qué es una Landing Page?",
            answer: "Una landing page es una página web diseñada específicamente para captar la atención de los usuarios y animarlos a realizar una acción específica, como registrarse o hacer una compra. Son páginas optimizadas para conversión con un objetivo claro y específico."
        }
    ],
    servicios: [
        {
            question: "¿Qué incluye el servicio de hosting?",
            answer: "Nuestro servicio de hosting incluye espacio en servidor para almacenar los archivos del sitio web, certificado SSL, copias de seguridad regulares, y soporte técnico. Los planes varían en capacidad de almacenamiento y características adicionales según las necesidades del cliente."
        },
        {
            question: "¿Qué son las rondas de revisión?",
            answer: "Las rondas de revisión son oportunidades para solicitar cambios y ajustes después de la primera entrega del proyecto. Cada servicio incluye una cantidad específica de rondas que se pueden realizar sin costo adicional para perfeccionar el trabajo según tus necesidades."
        },
        {
            question: "¿Qué incluye el mantenimiento web?",
            answer: "El mantenimiento web incluye actualizaciones de seguridad, revisión de enlaces, backups periódicos, actualizaciones de contenido y soporte técnico. La frecuencia y alcance de estos servicios depende del plan contratado (básico, estándar o premium)."
        },
        {
            question: "¿Qué es la optimización de velocidad?",
            answer: "La optimización de velocidad es el proceso de mejorar el tiempo de carga de tu sitio web mediante técnicas como optimización de imágenes, minificación de código y mejora de la configuración del servidor. Un sitio más rápido mejora la experiencia del usuario y el SEO."
        }
    ],
    soporte: [
        {
            question: "¿Qué es el soporte prioritario?",
            answer: "El soporte prioritario es un servicio de atención rápida para resolver problemas urgentes en tu sitio web. Los clientes con este servicio tienen acceso a respuestas más rápidas y soluciones inmediatas, especialmente útil en casos de emergencias fuera del horario normal."
        },
        {
            question: "¿Qué pasa si necesito más revisiones de las incluidas?",
            answer: "Si necesitas revisiones adicionales más allá de las incluidas en tu paquete, estas tendrán un costo extra que te informaremos antes de realizar cualquier ajuste. Siempre serás notificado y podrás aprobar el costo antes de proceder."
        },
        {
            question: "¿Qué incluye el período de soporte post-entrega?",
            answer: "Todos los proyectos incluyen un período de soporte gratuito de 30 días para corregir posibles errores. Después de este período, puedes contratar un plan de mantenimiento para continuar recibiendo soporte y actualizaciones."
        }
    ],
    mantenimiento: [
        {
            question: "¿Qué son los backups y cada cuánto se realizan?",
            answer: "Los backups son copias de seguridad de todos los archivos y base de datos de tu sitio web. Según el plan de mantenimiento, realizamos backups semanales o mensuales para proteger tu información en caso de cualquier incidente."
        },
        {
            question: "¿Cómo funcionan las actualizaciones de contenido?",
            answer: "Las actualizaciones de contenido implican modificar o añadir texto, imágenes, videos u otros elementos en tu sitio web. La frecuencia de actualizaciones depende del plan de mantenimiento contratado, generalmente mensual o trimestral."
        },
        {
            question: "¿Qué incluye la optimización de imágenes?",
            answer: "La optimización de imágenes consiste en reducir el tamaño de los archivos sin sacrificar la calidad visual, mejorando así la velocidad de carga del sitio. Incluye compresión, redimensionamiento y optimización de formatos."
        }
    ],
    políticas: [
        {
            question: "¿Cuál es la política de cancelación?",
            answer: "Si decides cancelar un proyecto después de iniciado, el adelanto no es reembolsable ya que cubre el trabajo y recursos iniciales. Para servicios anuales como hosting o dominio, la cancelación puede implicar una retención parcial de la cuota."
        },
        {
            question: "¿Cuál es la política de revisiones?",
            answer: "Cada paquete incluye un número específico de rondas de revisión, detallado en el contrato. Las revisiones adicionales se cobrarán por separado y siempre se comunicarán previamente para su aprobación."
        },
        {
            question: "¿Cómo funciona la política de soporte post-entrega?",
            answer: "Ofrecemos un período de soporte gratuito de 30 días después de la entrega para corregir posibles errores. Después de este período, recomendamos contratar un plan de mantenimiento para soporte continuo."
        }
    ],
    Costos: [
        {
            question: "¿En qué moneda se reflejan los precios?",
            answer: "Los precios de nuestros servicios están reflejados en dólares americanos. Sin embargo, puedes realizar el pago en pesos argentinos al tipo de cambio del día, según lo establezca tu banco o procesador de pagos."
        },
        {
            question: "¿El costo del dominio y hosting están incluidos en el precio?",
            answer: "No, los costos de dominio y hosting no están incluidos en el precio de nuestros servicios. Estos servicios son contratados por separado y renovados anualmente, de acuerdo con las tarifas del proveedor de hosting y dominio."
        },
        {
            question: "¿El certificado SSL está incluido en el precio?",
            answer: "El certificado SSL no está incluido en el precio estándar. Si deseas añadir SSL para proteger tu sitio, que en algunos proveedores de servicio es obligatorio, este se contrata por separado y suele renovarse anualmente. Un SSL es importante para la seguridad y confianza de los usuarios en tu página web."
        },
        {
            question: "¿Existen otros costos adicionales que deba considerar?",
            answer: "Es posible que algunos servicios adicionales, como revisiones extra o mantenimiento posterior al período incluido, impliquen costos adicionales. Cualquier gasto adicional será comunicado antes de proceder para que pueda ser aprobado."
        }
    ]
};


const FAQSection = () => {
    const [openItems, setOpenItems] = useState({});

    useEffect(() => {
        // Manejar el scroll cuando se accede directamente al #faq
        if (window.location.hash === '#faq') {
            const element = document.getElementById('faq');
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, []);

    const toggleItem = (category, index) => {
        setOpenItems(prev => {
            const newState = { ...prev };
            // Cerrar el ítem anterior si está abierto
            Object.keys(newState).forEach(key => {
                if (key !== `${category}-${index}`) {
                    newState[key] = false;
                }
            });
            // Alternar el estado del ítem actual
            newState[`${category}-${index}`] = !prev[`${category}-${index}`];
            return newState;
        });
    };

    return (
        <FAQContainer id="faq">
            <FAQTitle>Preguntas Frecuentes</FAQTitle>
            {Object.entries(faqData).map(([category, questions]) => (
                <CategorySection key={category}>
                    <CategoryTitle>{category.charAt(0).toUpperCase() + category.slice(1)}</CategoryTitle>
                    {questions.map((item, index) => (
                        <FAQItem key={index}>
                            <Question
                                onClick={() => toggleItem(category, index)}
                                whileHover={{ scale: 1.01 }}
                                isOpen={openItems[`${category}-${index}`]}
                            >
                                {item.question}
                                <ArrowIcon
                                    animate={{
                                        rotate: openItems[`${category}-${index}`] ? 180 : 0,
                                        color: openItems[`${category}-${index}`] ?
                                            props => props.theme.colors.primary :
                                            props => props.theme.colors.accent
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    ↓
                                </ArrowIcon>
                            </Question>
                            <AnimatePresence>
                                {openItems[`${category}-${index}`] && (
                                    <Answer
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{
                                            height: "auto",
                                            opacity: 1,
                                            transition: {
                                                height: { duration: 0.4, ease: "easeOut" },
                                                opacity: { duration: 0.4, ease: "easeInOut" }
                                            }
                                        }}
                                        exit={{
                                            height: 0,
                                            opacity: 0,
                                            transition: {
                                                height: { duration: 0.4, ease: "easeIn" },
                                                opacity: { duration: 0.3, ease: "easeOut" }
                                            }
                                        }}
                                    >
                                        {item.answer}
                                    </Answer>
                                )}
                            </AnimatePresence>
                        </FAQItem>
                    ))}
                </CategorySection>
            ))}
        </FAQContainer>
    );
};

export default FAQSection;