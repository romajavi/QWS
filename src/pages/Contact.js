import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ReactTyped } from 'react-typed';
import { useTranslation } from 'react-i18next';
import Calendar from '../components/Calendar.js';
import StandardPopup from '../components/StandardPopup.js';
import LoadingSpinner from '../components/LoadingSpinner.js';
import PageContainer from '../components/PageContainer.js';
import Button from '../components/Button.js';
import Captcha from '../components/Captcha.js';
import { glowButtonStyles } from '../styles/Animations.js';

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 120px);
  width: 100%;
  padding-bottom: 5rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: ${props => props.theme.colors.secondaryBackground};
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.2);

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CheckboxTitle = styled.h3`
  color: ${props => props.theme.colors.accent};
  font-size: 1rem;
  margin-bottom: 1rem;
  text-align: center;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.2);
`;

const FormContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 2rem auto;
  background: ${props => props.theme.colors.cardBackground};
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  border: 1px solid ${props => props.hasError ? '#ff3333' : props.theme.colors.secondaryBackground}40;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 2px 1fr;
    gap: 2rem;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  padding: 1rem;

  h2 {
    color: ${props => props.theme.colors.primary};
    font-size: 1.5rem;
    margin-bottom: 1rem;
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
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
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
  padding: 0.8rem;
  margin-bottom: 1rem;
  background: rgba(30, 30, 30, 0.7);
  border: 1px solid ${props => props.$hasError ? '#ff3333' : `${props.theme.colors.secondaryBackground}40`};
  border-radius: 8px;
  color: ${props => props.theme.colors.text};
  min-height: 100px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.accent};
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.2);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  background: rgba(30, 30, 30, 0.7);
  border: 1px solid ${props => props.theme.colors.secondaryBackground}40;
  border-radius: 8px;
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  transition: all 0.3s ease;

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
  padding: 1.2rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  border: ${props => props.theme.colors.secondaryBackground};
`;

const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  padding: 0.8rem 1.2rem;
  background: rgba(30, 30, 30, 0.7);
  border-radius: 5px;
  border: ${props => props.theme.colors.secondaryBackground};
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
  line-height: 1.5;
  color: ${props => props.theme.colors.text};
  margin: 0.5rem 0;
`;

const StatusIcon = styled.span`
  font-size: 3rem;
  margin-bottom: 0.5rem;
`;

const PopupMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
`;

const FormSection = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 1.5rem;
  height: 100%;
`;

const TextAreaContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
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


const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    contactPreference: [],
    contactDays: [],
    contactTime: [],
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
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSuccess: false,
    error: null
  });
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const navigate = useNavigate();
  const formRef = useRef(null);

  useEffect(() => {
    if (formStatus.isSuccess) {
      setSubmitStatus({
        success: true,
        titleKey: 'contact.form.status.success.title',
        message: t('contact.form.status.success.message')
      });
      setShowPopup(true);
    } else if (formStatus.error) {
      setSubmitStatus({
        success: false,
        titleKey: 'contact.form.status.error.title',
        message: t('contact.form.status.error.message')
      });
      setShowPopup(true);
    }
  }, [formStatus, t]);

  const validateForm = () => {
    console.log('Starting form validation');
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = true;
    if (!formData.phone.trim()) newErrors.phone = true;
    // if (!formData.contactPreference.length) newErrors.contactPreference = true;
    // if (!formData.contactDays.length) newErrors.contactDays = true;
    // if (!formData.contactTime.length) newErrors.contactTime = true;
    if (!formData.observations || formData.observations.trim() === '') newErrors.observations = true;
    if (!isCaptchaVerified) newErrors.captcha = true;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Función para manejar el envío del formulario
  // 3. Update handleSubmit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Activar spinner

    if (!validateForm()) {
      setSubmitStatus({
        success: false,
        titleKey: 'contact.form.errors.title',
        message: t('contact.form.errors.required')
      });
      setShowPopup(true);
      setIsLoading(false); // Desactivar spinner
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus({ isSubmitting: false, isSuccess: true, error: null });
        handleReset();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Server response was not ok');
      }
    } catch (error) {
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        error: error.message === 'email_error' ? 'contact.form.errors.clientEmailError' : 'contact.form.errors.required'
      });
    } finally {
      setIsLoading(false); // Siempre desactivar spinner
    }
  };


  // 4. Update handleReset function
  const handleReset = (e) => {
    if (e) {
      e.preventDefault();
    }

    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      contactPreference: [],
      contactDays: [],
      contactTime: [],
      appointmentDate: '',
      appointmentTime: '10:00',
      appointmentMedium: '',
      observations: ''
    });

    setSelectedDate(null);
    setErrors({});
    setIsCaptchaVerified(false);
    setSubmitStatus({
      success: false,
      titleKey: '',
      message: ''
    });
    setShowPopup(false);

    if (formRef.current) {
      formRef.current.reset();
      const radios = formRef.current.querySelectorAll('input[type="radio"]');
      radios.forEach(radio => {
        radio.checked = false;
      });

      const textarea = formRef.current.querySelector('textarea');
      if (textarea) {
        textarea.value = '';
      }

      const select = formRef.current.querySelector('select[name="appointmentTime"]');
      if (select) {
        select.value = '10:00';
      }
    }


    // Limpiar cualquier mensaje de error o éxito que pudiera estar mostrándose
    setShowPopup(false);
  };

  // Función para manejar la selección de fecha
  const handleDateSelect = (date) => {
    if (!date) return;

    // Formatear la fecha para el formato ISO
    const formattedDate = date.toISOString().split('T')[0];

    setSelectedDate(date);
    setFormData(prev => ({
      ...prev,
      appointmentDate: formattedDate
    }));
  };



  // Función para cerrar el popup
  const handleClosePopup = () => {
    setShowPopup(false);
    if (submitStatus.success) {
      // Redirigir a la página principal después de un envío exitoso
      setTimeout(() => navigate('/'), 500);
    }
  };

  console.log('Rendering popup with:', {
    isOpen: showPopup,
    titleKey: submitStatus.titleKey,
    message: submitStatus.message
  });

  return (
    <PageContainer>
      {isLoading && <LoadingSpinner />}
      <ContactWrapper>
        <Title>
          <ReactTyped
            strings={[t('contact.title')]}
            typeSpeed={50}
            showCursor={true}
            cursorChar="|"
          />
        </Title>
        <FormContainer $hasError={Object.keys(errors).length > 0}>
          <form onSubmit={handleSubmit} ref={formRef}>
            <FormGrid>

              {/* personal information */}
              <Section>
                <h2>{t('contact.form.sections.personal')}</h2>

                {/* Inputs personales */}
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

                <Input
                  type="text"
                  name="company"
                  placeholder={t('contact.form.inputs.company')}
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  autoComplete="organization"
                />

                {/* Preferencias de Contacto */}
                <PreferenceGroup $hasError={errors.contactPreference}>
                  <CheckboxTitle $error={errors.contactPreference}>
                    {t('contact.form.preferences.contact.title')}
                  </CheckboxTitle>
                  <RadioContainer>
                    <RadioLabel $hasError={errors.contactPreference}>
                      <input
                        type="radio"
                        name="contactPreference"
                        value="phone"
                        checked={formData.contactPreference.includes('phone')}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            contactPreference: [e.target.value]
                          });
                          if (errors.contactPreference) {
                            setErrors(prev => ({ ...prev, contactPreference: false }));
                          }
                        }}
                      />
                      {t('contact.form.preferences.contact.options.phone')}
                    </RadioLabel>
                    <RadioLabel $hasError={errors.contactPreference}>
                      <input
                        type="radio"
                        name="contactPreference"
                        value="email"
                        checked={formData.contactPreference.includes('email')}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            contactPreference: [e.target.value]
                          });
                          if (errors.contactPreference) {
                            setErrors(prev => ({ ...prev, contactPreference: false }));
                          }
                        }}
                      />
                      {t('contact.form.preferences.contact.options.email')}
                    </RadioLabel>
                  </RadioContainer>
                </PreferenceGroup>

                {/* Días de Contacto */}
                <PreferenceGroup $hasError={errors.contactDays}>
                  <CheckboxTitle $error={errors.contactDays}>
                    {t('contact.form.preferences.days.title')}
                  </CheckboxTitle>
                  <RadioContainer>
                    <RadioLabel $hasError={errors.contactDays}>
                      <input
                        type="radio"
                        name="contactDays"
                        value="weekdays"
                        checked={formData.contactDays.includes('weekdays')}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            contactDays: [e.target.value]
                          });
                          if (errors.contactDays) {
                            setErrors(prev => ({ ...prev, contactDays: false }));
                          }
                        }}
                      />
                      {t('contact.form.preferences.days.options.weekdays')}
                    </RadioLabel>
                    <RadioLabel $hasError={errors.contactDays}>
                      <input
                        type="radio"
                        name="contactDays"
                        value="weekend"
                        checked={formData.contactDays.includes('weekend')}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            contactDays: [e.target.value]
                          });
                          if (errors.contactDays) {
                            setErrors(prev => ({ ...prev, contactDays: false }));
                          }
                        }}
                      />
                      {t('contact.form.preferences.days.options.weekend')}
                    </RadioLabel>
                  </RadioContainer>
                </PreferenceGroup>

                {/* Horario de Contacto */}
                <PreferenceGroup $hasError={errors.contactTime}>
                  <CheckboxTitle $error={errors.contactTime}>
                    {t('contact.form.preferences.time.title')}
                  </CheckboxTitle>
                  <RadioContainer>
                    <RadioLabel $hasError={errors.contactTime}>
                      <input
                        type="radio"
                        name="contactTime"
                        value="morning"
                        checked={formData.contactTime.includes('morning')}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            contactTime: [e.target.value]
                          });
                          if (errors.contactTime) {
                            setErrors(prev => ({ ...prev, contactTime: false }));
                          }
                        }}
                      />
                      {t('contact.form.preferences.time.options.morning')}
                    </RadioLabel>
                    <RadioLabel $hasError={errors.contactTime}>
                      <input
                        type="radio"
                        name="contactTime"
                        value="afternoon"
                        checked={formData.contactTime.includes('afternoon')}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            contactTime: [e.target.value]
                          });
                          if (errors.contactTime) {
                            setErrors(prev => ({ ...prev, contactTime: false }));
                          }
                        }}
                      />
                      {t('contact.form.preferences.time.options.afternoon')}
                    </RadioLabel>
                  </RadioContainer>
                </PreferenceGroup>

                {/* Sección de Observaciones */}
                <FormSection>
                  <TextAreaContainer>
                    <CheckboxTitle $error={errors.contactTime}>
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

              {/* appointment information */}
              <Section>
                <h2>{t('contact.form.sections.appointment')}</h2>
                <Calendar
                  onSelectDate={handleDateSelect}
                  selectedDate={selectedDate}
                />

                <PreferenceGroup>
                  <CheckboxTitle>
                    {t('contact.form.appointment.time')}
                  </CheckboxTitle>
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

                {/* Implementación del Captcha */}
                <PreferenceGroup>
                  <CheckboxTitle $error={errors.captcha}>
                    {t('contact.captcha.title')}
                  </CheckboxTitle>
                  <Captcha
                    onVerify={(verified) => {
                      setIsCaptchaVerified(verified);
                      if (verified) {
                        setErrors(prev => ({ ...prev, captcha: false }));
                      } else {
                        setErrors(prev => ({ ...prev, captcha: true }));
                      }
                    }}
                  />
                  {errors.captcha && (
                    <ErrorMessage>
                      {t('contact.captcha.required')}
                    </ErrorMessage>
                  )}
                </PreferenceGroup>
              </Section>
            </FormGrid>

            <CustomButtonGroup>
              <ClearButton
                variant="secondary"
                size="small"
                onClick={handleReset}
              >
                {t('contact.form.buttons.clear')}
              </ClearButton>
              <SubmitButton
                variant="primary"
                size="small"
                type="submit"
              >
                {t('contact.form.buttons.submit')}
              </SubmitButton>
            </CustomButtonGroup>
          </form>
        </FormContainer>
      </ContactWrapper>

      <StandardPopup
        isOpen={showPopup}
        onClose={handleClosePopup}
        titleKey={submitStatus.titleKey}  // Asegúrate que sea titleKey y no title
      >
        <PopupMessage>
          <StatusIcon>
            {submitStatus.success ? "✅" : "❌"}
          </StatusIcon>
          <MessageText>
            {submitStatus.message}
          </MessageText>
        </PopupMessage>
      </StandardPopup>
    </PageContainer>
  );
}

export default Contact;