import React, { useState, useRef, useEffect, Suspense, lazy } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactTyped } from 'react-typed';
import { useTranslation } from 'react-i18next';
import PageContainer from './PageContainer.js';
import Button from './Button.js';
import { glowButtonStyles } from '../styles/Animations.js';
import { API_URL } from '../config/api.js';
import TitlePages from './TitlePages.js';
import { init, send } from '@emailjs/browser';

const SERVICE_ID = 'service_qosvqm2';
const TEMPLATE_ID_CLIENT = 'template_dpkma1g';
const TEMPLATE_ID_ADMIN = 'template_wqf1ilf';
const PUBLIC_KEY = 'M0DzdRq9LJ30ljZpD';

// Componentes que se cargarán de forma diferida
const Calendar = lazy(() => import('../components/Calendar.js'));
const StandardPopup = lazy(() => import('../components/StandardPopup.js'));
const LoadingSpinner = lazy(() => import('../components/LoadingSpinner.js'));


const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 80px);
  width: 100%;
  padding-top: 80px;
  padding-bottom: 5rem;
  scroll-margin-top: 80px;
  margin-bottom: 3rem;
  position: relative;
  z-index: 1; // Añadimos esto para asegurar que esté por encima del gradiente
`;

const GradientOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.85) 20%,
    rgba(0, 0, 0, 0.6) 40%,
    rgba(0, 50, 50, 0.36) 100%,
    rgba(0, 50, 50, 0.36) 100%
  );
  pointer-events: none;
  z-index: -1;
`;

const CheckboxTitle = styled.h3`
  color: ${props => props.theme.colors.accent};
  font-size: 1rem;
  margin-bottom: 0.5rem; // Reducido
  text-align: center;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.2);
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 1.5rem auto;
  padding: 2rem;
  background: ${props => props.theme.colors.cardBackground};
  backdrop-filter: blur(10px);
  border-radius: 20px;
  position: relative;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  border: 1px solid ${props => props.$hasError ? '#ff3333' : props.theme.colors.secondaryBackground}40;
  min-width: min(90%, 1200px);
  box-sizing: border-box;
  opacity: ${props => props.$isSubmitting || props.$showPopup ? 0.6 : 1};
  pointer-events: ${props => props.$isSubmitting || props.$showPopup ? 'none' : 'all'};
  filter: ${props => props.$isSubmitting || props.$showPopup ? 'blur(2px)' : 'none'};
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    width: 95%;
    padding: 1rem;
    margin: 1rem auto;
    min-width: unset;
  }
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
  width: 100%; // Ensure full width

  @media (min-width: 768px) {
    grid-template-columns: minmax(300px, 1fr) 2px minmax(300px, 1fr);
    gap: 2rem;
  }

  /* Ensure grid items don't overflow */
  & > * {
    width: 100%;
    max-width: 100%;
  }
`;

const SpinnerOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  pointer-events: none;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  height: 100%;
  padding: 0.75rem;
  
  h2 {
    color: ${props => props.theme.colors.primary};
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
    text-align: left;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(
        90deg,
        ${props => props.theme.colors.primary},
        ${props => props.theme.colors.accent},
        transparent
      );
    }
    &:last-child {
    justify-content: flex-start; // Alinea al inicio
  }
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 0.5rem;
  background: rgba(30, 30, 30, 0.7);
  border: 1px solid ${props => props.$hasError ? '#ff3333' : `${props.theme.colors.secondaryBackground}40`};
  border-radius: 8px;
  color: ${props => props.theme.colors.text};

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-text-fill-color: ${props => props.theme.colors.text};
    -webkit-box-shadow: 0 0 0px 1000px rgba(30, 30, 30, 0.7) inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.6rem;
  background: rgba(30, 30, 30, 0.7);
  border: 1px solid ${props => props.$hasError ? '#ff3333' : `${props.theme.colors.secondaryBackground}40`};
  border-radius: 8px;
  color: ${props => props.theme.colors.text};
  
  height: 120px; // Establecemos una altura fija más pequeña
  min-height: 120px; // Establecemos la misma altura mínima
  max-height: 330px; // Limitamos la altura máxima
  
  resize: vertical;
  transition: all 0.3s ease;
  margin-bottom: 0;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.accent};
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.2);
  }
`;

const baseSpacing = {
  marginBottom: '1rem',
  containerGap: '1.5rem' // Añadimos un valor consistente para el espacio entre contenedores
};


const Select = styled.select`
  width: 100%; // Cambiado a ancho completo
  max-width: 250px; // Mismo ancho máximo que RadioLabel
  padding: 0.8rem;
  margin: 0 auto 1rem auto;
  display: block;
  background: rgba(30, 30, 30, 0.7);
  border: 1px solid ${props => props.theme.colors.secondaryBackground}40;
  border-radius: 8px;
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  text-align: center;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.accent};
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.2);
  }

  option {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    padding: 0.5rem;
  }
`;

const PreferenceGroup = styled.div`
  background: rgba(30, 30, 30, 0.5);
  padding: 0.5rem; // Reducido
  border-radius: 8px;
  border: ${props => props.theme.colors.secondaryBackground};
  margin-bottom: 0.5rem; // Reducido
  width: 100%;
  box-sizing: border-box;

  /* Ajuste específico para el selector de hora */
  &:nth-child(2) {
    margin-bottom: 0.5rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    margin-bottom: 1rem;
  }
`;

const PreferencesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  height: calc(100% - 2rem); // Resta el espacio del título
  justify-content: space-between; // Distribuye el espacio entre los elementos
`;

const RadioContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 0.5rem;
  padding: 0.25rem 0; // Reducido el padding vertical

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;


const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  padding: 0.8rem 1.2rem;
  background: rgba(30, 30, 30, 0.7);
  border-radius: 5px;
  width: 100%; // Ancho completo
  max-width: 250px; // Limitar el ancho máximo para mejor apariencia
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 255, 255, 0.1);
    transform: translateY(-2px);
  }

  input[type="radio"] {
    appearance: none;
    width: 18px;
    height: 18px;
    border: 2px solid ${props => props.$error ? '#ff3333' : props.theme.colors.primary};
    border-radius: 50%;
    position: relative;
    transition: all 0.3s ease;

    &:checked {
      background: ${props => props.theme.colors.primary};
      border-color: ${props => props.theme.colors.accent};
      box-shadow: 0 0 10px rgba(0, 255, 255, 0.3);

      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: ${props => props.theme.colors.background};
      }
    }
  }
    @media (min-width: 768px) {
    width: calc(50% - 0.5rem); // Distribuye el espacio equitativamente
  }
`;

const Divider = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    width: 2px;
    background: linear-gradient(
      to bottom,
      transparent,
      ${props => props.theme.colors.primary},
      ${props => props.theme.colors.accent},
      ${props => props.theme.colors.primary},
      transparent
    );
    margin: 0 1rem;
    opacity: 0.6;
  }
`;

const MessageText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${props => props.theme.colors.text};
  margin: 0;
  max-width: 100%;
  padding: 0 1rem;
`;

const StatusIcon = styled.span`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;

const PopupMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem;
  text-align: center;
`;


const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1; // Asegura que ocupe todo el espacio vertical disponible
`;

const TextAreaContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%; // Aseguramos que ocupe todo el espacio vertical disponible
`;

const CustomButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const ClearButton = styled(Button)`
  background: ${props => props.theme.colors.secondaryBackground};
  &:hover {
    background: ${props => props.theme.colors.secondaryBackground};
  }
`;

const SubmitButton = styled(Button)`
  ${glowButtonStyles}
`;

const ErrorMessage = styled.p`
  color: #ff3333;
  font-size: 0.875rem;
  text-align: center;
  margin-top: 0.5rem;
`;

const FadeIn = styled.div`
  animation: fadeIn 0.3s ease-in;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;


const ContentFadeIn = styled.div`
  opacity: 0;
  animation: fadeIn 0.3s ease-in forwards;
  animation-delay: 1s;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;



const Contact = () => {
  const { t } = useTranslation();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  // Estados del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    appointmentDate: '',
    appointmentTime: '10:00',
    appointmentMedium: '',
    observations: ''
  });

  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    titleKey: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isAppointmentLoading, setIsAppointmentLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const formRef = useRef(null);

  useEffect(() => {
    init(PUBLIC_KEY);
  }, []);

  // Función de validación del formulario
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = true;
    if (!formData.phone.trim()) newErrors.phone = true;
    if (!formData.observations || formData.observations.trim() === '') newErrors.observations = true;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Función para manejar el cierre del popup
  const handleClosePopup = () => {
    setShowPopup(false);
    if (submitStatus.success) {
      handleReset();
      // Dar tiempo para que se vea la animación de cierre
      setTimeout(() => {
        window.location.href = '/';
      }, 500);
    }
  };

  // Función para resetear el formulario
  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      appointmentDate: '',
      appointmentTime: '10:00',
      appointmentMedium: '',
      observations: ''
    });
    setSelectedDate(null);
    setErrors({});
  };

  // Efecto para manejar el estado de carga del calendario
  useEffect(() => {
    setIsAppointmentLoading(true);
    // Simular un pequeño tiempo de carga para la inicialización del calendario
    const timer = setTimeout(() => {
      setIsAppointmentLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Efecto para la animación inicial
  useEffect(() => {
    if (inView) {
      setIsVisible(true);
      const sequence = async () => {
        await controls.start("titleVisible");
        await new Promise(resolve => setTimeout(resolve, 300));
        await controls.start("contentVisible");
      };
      sequence();
    }
  }, [inView, controls]);

  // Manejo del envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const templateParamsClient = {
        name: formData.name,
        user_email: formData.email,
        user_name: formData.name,
        phone: formData.phone,
        appointmentDate: formData.appointmentDate || 'No especificada',
        appointmentTime: formData.appointmentTime || 'No especificada',
        appointmentMedium: formData.appointmentMedium || 'No especificado',
        observations: formData.observations
      };

      const templateParamsAdmin = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        appointmentDate: formData.appointmentDate || 'No especificada',
        appointmentTime: formData.appointmentTime || 'No especificada',
        appointmentMedium: formData.appointmentMedium || 'No especificado',
        observations: formData.observations
      };

      // Enviar email al cliente
      await send(
        SERVICE_ID,
        TEMPLATE_ID_CLIENT,
        templateParamsClient,
        PUBLIC_KEY
      );

      // Enviar email al admin
      await send(
        SERVICE_ID,
        TEMPLATE_ID_ADMIN,
        templateParamsAdmin,
        PUBLIC_KEY
      );

      setSubmitStatus({
        success: true,
        titleKey: 'contact.form.status.success.title',
        message: t('contact.form.status.success.message')
      });
      setShowPopup(true);

      // Esperar antes de redireccionar
      if (submitStatus.success) {
        setTimeout(() => {
          window.location.href = '/';
        }, 3000);
      }

    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setSubmitStatus({
        success: false,
        titleKey: 'contact.form.status.error.title',
        message: t('contact.form.status.error.message')
      });
      setShowPopup(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageContainer>
      <ContactWrapper id="contact" ref={ref}>
        <GradientOverlay /> {/* Añadimos esto aquí */}
        <Suspense fallback={<LoadingSpinner />}>
          {/* Animación del título */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              titleVisible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" }
              }
            }}
            style={{ position: 'relative', zIndex: 1 }}

          >
            <TitlePages text={t('contact.title')} />
          </motion.div>

          {/* Animación del formulario */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={controls}
            variants={{
              contentVisible: {
                opacity: 1,
                transition: {
                  duration: 0.6,
                  when: "beforeChildren",
                }
              }
            }}
            style={{ position: 'relative', zIndex: 1 }}
          >
            <FormContainer
              $hasError={Object.keys(errors).length > 0}
              $isSubmitting={isLoading}
              $showPopup={showPopup}
            >
              <form onSubmit={handleSubmit} ref={formRef}>
                <FormGrid>
                  {/* Sección de información personal */}
                  <Section>
                    <h2>{t('contact.form.sections.personal')}</h2>

                    <Input
                      type="text"
                      name="name"
                      placeholder={t('contact.form.inputs.name')}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      $hasError={errors.name}
                      autoComplete="given-name"
                    />

                    <Input
                      type="email"
                      name="email"
                      placeholder={t('contact.form.inputs.email')}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      $hasError={errors.email}
                      autoComplete="email"
                    />

                    <Input
                      type="tel"
                      name="phone"
                      placeholder={t('contact.form.inputs.phone')}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      $hasError={errors.phone}
                      autoComplete="tel"
                    />

                    {/* Área de observaciones */}
                    <FormSection>
                      <TextAreaContainer>
                        <CheckboxTitle>
                          {t('contact.form.inputs.observations')}
                        </CheckboxTitle>
                        <TextArea
                          name="observations"
                          value={formData.observations}
                          onChange={(e) => setFormData({ ...formData, observations: e.target.value })}
                          style={{ flex: 1, minHeight: '150px' }}
                          $hasError={errors.observations}
                        />
                      </TextAreaContainer>
                    </FormSection>
                  </Section>

                  <Divider />

                  {/* Sección de cita */}
                  <Section>
                    <h2>{t('contact.form.sections.appointment')}</h2>
                    <Suspense fallback={
                      <LoadingSpinner
                        fullScreen={false}
                        size="30px"
                        borderWidth="3px"
                        height="100%"
                      />
                    }>
                      {isAppointmentLoading ? (
                        <div style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          minHeight: '300px'
                        }}>
                          <LoadingSpinner
                            fullScreen={false}
                            size="30px"
                            borderWidth="3px"
                            height="auto"
                          />
                        </div>
                      ) : (
                        <FadeIn>
                          <PreferencesContainer>
                            <Calendar
                              onSelectDate={(date) => {
                                setSelectedDate(date);
                                setFormData(prev => ({
                                  ...prev,
                                  appointmentDate: date.toISOString().split('T')[0]
                                }));
                              }}
                              selectedDate={selectedDate}
                            />

                            <PreferenceGroup>
                              <CheckboxTitle>
                                {t('contact.form.appointment.time')}
                              </CheckboxTitle>
                              <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                                <Select
                                  name="appointmentTime"
                                  value={formData.appointmentTime}
                                  onChange={(e) => setFormData({
                                    ...formData,
                                    appointmentTime: e.target.value
                                  })}
                                  $hasError={errors.appointmentTime}
                                >
                                  <option value="09:00">09:00</option>
                                  <option value="10:00">10:00</option>
                                  <option value="11:00">11:00</option>
                                  <option value="12:00">12:00</option>
                                  <option value="13:00">13:00</option>
                                  <option value="14:00">14:00</option>
                                  <option value="15:00">15:00</option>
                                  <option value="16:00">16:00</option>
                                  <option value="17:00">17:00</option>
                                </Select>
                              </div>
                            </PreferenceGroup>

                            <PreferenceGroup>
                              <CheckboxTitle>
                                {t('contact.form.appointment.medium.title')}
                              </CheckboxTitle>
                              <RadioContainer>
                                <RadioLabel>
                                  <input
                                    type="radio"
                                    name="appointmentMedium"
                                    value="zoom"
                                    checked={formData.appointmentMedium === 'zoom'}
                                    onChange={(e) => setFormData({
                                      ...formData,
                                      appointmentMedium: e.target.value
                                    })}
                                  />
                                  {t('contact.form.appointment.medium.options.zoom')}
                                </RadioLabel>
                                <RadioLabel>
                                  <input
                                    type="radio"
                                    name="appointmentMedium"
                                    value="meet"
                                    checked={formData.appointmentMedium === 'meet'}
                                    onChange={(e) => setFormData({
                                      ...formData,
                                      appointmentMedium: e.target.value
                                    })}
                                  />
                                  {t('contact.form.appointment.medium.options.meet')}
                                </RadioLabel>
                                <RadioLabel>
                                  <input
                                    type="radio"
                                    name="appointmentMedium"
                                    value="whatsapp"
                                    checked={formData.appointmentMedium === 'whatsapp'}
                                    onChange={(e) => setFormData({
                                      ...formData,
                                      appointmentMedium: e.target.value
                                    })}
                                  />
                                  {t('contact.form.appointment.medium.options.whatsapp')}
                                </RadioLabel>
                              </RadioContainer>
                            </PreferenceGroup>
                          </PreferencesContainer>
                        </FadeIn>
                      )}
                    </Suspense>
                  </Section>
                </FormGrid>

                <CustomButtonGroup>
                  <ClearButton
                    variant="secondary"
                    size="small"
                    onClick={handleReset}
                    disabled={isLoading}
                  >
                    {t('contact.form.buttons.clear')}
                  </ClearButton>
                  <SubmitButton
                    variant="primary"
                    size="small"
                    type="submit"
                    disabled={isLoading}
                  >
                    {t('contact.form.buttons.submit')}
                  </SubmitButton>
                </CustomButtonGroup>
              </form>
            </FormContainer>
          </motion.div>
        </Suspense>
      </ContactWrapper>

      {/* Superposiciones: Spinner y Popup */}
      {isLoading && (
        <SpinnerOverlay>
          <LoadingSpinner />
        </SpinnerOverlay>
      )}

      {showPopup && (
        <Suspense fallback={null}>
          <StandardPopup
            isOpen={showPopup}
            onClose={handleClosePopup}
            titleKey={submitStatus.titleKey}
          >
            <PopupMessage>
              <StatusIcon>
                {submitStatus.success ? "✅" : "⚠️"}
              </StatusIcon>
              <MessageText>
                {submitStatus.message}
              </MessageText>
            </PopupMessage>
          </StandardPopup>
        </Suspense>
      )}
      <GradientOverlay />
    </PageContainer>
  );
};

export default Contact;