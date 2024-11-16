import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ReactTyped } from 'react-typed';
import Calendar from '../components/Calendar.js';
import StandardPopup from '../components/StandardPopup.js';
import LoadingSpinner from '../components/LoadingSpinner.js';
import PageContainer from '../components/PageContainer.js';
import Button from '../components/Button.js';
import Captcha from '../components/Captcha.js';




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

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  background: rgba(30, 30, 30, 0.7);
  border: 1px solid ${props => props.theme.colors.secondaryBackground}40;
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
  width: fit-content; // Ajustar al contenido
  min-width: 120px; // Ancho mínimo
  margin: 0 auto; // Centrar
  display: block;
  padding: 0.8rem;
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


const FormContainer = styled.div`

  width: 90%;
  max-width: 1200px;
  margin: 2rem auto;
  background: ${props => props.theme.colors.cardBackground};
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem 2rem 7rem 2rem; // Aumentar padding inferior
  position: relative;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  border: 1px solid ${props => props.hasError ? '#ff3333' : props.theme.colors.secondaryBackground}40;

  @media (max-width: 768px) {
   padding: 2rem;
 }
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2px 1fr;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1em; // Espaciado uniforme
  width: 100%;
  padding: 1rem;
  
  h2 {
    color: ${props => props.theme.colors.primary};
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
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
  margin-bottom: 1.5rem;
  background: rgba(30, 30, 30, 0.7);
  border: 1px solid ${props => props.hasError ? '#ff3333' : props.theme.colors.secondaryBackground}40;
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


const PreferenceGroup = styled.div`
  background: rgba(30, 30, 30, 0.5);
  padding: 1.2rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  border: 1px solid ${props => props.hasError ? '#ff3333' : props.theme.colors.secondaryBackground}40;
`;

const RadioContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.2rem;
`;

const CheckboxTitle = styled.h3`
  color: ${props => props.error ? '#ff3333' : props.theme.colors.accent};
  font-size: 1rem;
  margin-bottom: 1rem;
  text-align: center;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.2);
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
  border: 1px solid ${props => props.hasError ? '#ff3333' : props.theme.colors.secondaryBackground}40;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 255, 255, 0.1);
    transform: translateY(-2px);
  }

  input[type="radio"] {
    appearance: none;
    width: 18px;
    height: 18px;
    border: 2px solid ${props => props.error ? '#ff3333' : props.theme.colors.primary};
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

  @media (max-width: 768px) {
    display: none;
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
 position: absolute;
 bottom: 2rem;
 right: 2rem;
 display: flex;
 gap: 1rem;
 

 @media (max-width: 768px) {
   position: static;
   justify-content: center;
   margin-top: 2rem;
 }
`;

const ClearButton = styled(Button)`
  background: ${props => props.theme.colors.secondaryBackground};
  &:hover {
    background: ${props => props.theme.colors.secondaryBackground};
  }
`;

const SubmitButton = styled(Button)`
`;


const Contact = () => {
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

  const [errors, setErrors] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });

  const navigate = useNavigate();
  const formRef = useRef(null);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = true;
    if (!formData.email) newErrors.email = true;
    if (!formData.phone) newErrors.phone = true;
    if (!formData.contactPreference.length) newErrors.contactPreference = true;
    if (!formData.contactDays.length) newErrors.contactDays = true;
    if (!formData.contactTime.length) newErrors.contactTime = true;
    if (!isCaptchaVerified) newErrors.captcha = true;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setSubmitStatus({
        success: false,
        message: 'Por favor, complete todos los campos requeridos.'
      });
      setShowPopup(true);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: '¡Gracias por contactarnos! Te responderemos pronto.'
        });
        handleReset();
      } else {
        throw new Error('Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus({
        success: false,
        message: 'Hubo un error al enviar el formulario. Por favor, intenta nuevamente.'
      });
    } finally {
      setIsLoading(false);
      setShowPopup(true);
    }
  };

  const handleReset = () => {
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
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setFormData(prev => ({
      ...prev,
      appointmentDate: date.toISOString().split('T')[0]
    }));
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    if (submitStatus.success) {
      setTimeout(() => navigate('/'), 500);
    }
  };


  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);


  return (
    <PageContainer>
      {isLoading && <LoadingSpinner />}
      <ContactWrapper>
        <Title>
          <ReactTyped
            strings={['Contacto']}
            typeSpeed={50}
            showCursor={true}
            cursorChar="|"
          />
        </Title>
        <FormContainer>
          <form onSubmit={handleSubmit} ref={formRef}>
            <FormGrid>
              <Section>
                <h2>Información</h2>
                <Input
                  type="text"
                  name="name"
                  placeholder="Nombre *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  hasError={errors.name}
                  autoComplete="name"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  hasError={errors.email}
                  autoComplete="email"
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Teléfono *"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  hasError={errors.phone}
                  autoComplete="tel"
                />
                <Input
                  type="text"
                  name="company"
                  placeholder="Empresa"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  autoComplete="organization"
                />

                <PreferenceGroup>
                  <CheckboxTitle error={errors.contactPreference}>
                    Preferencias de Contacto *
                  </CheckboxTitle>
                  <RadioContainer>
                    <RadioLabel error={errors.contactPreference}>
                      <input
                        type="radio"
                        name="contactPreference"
                        value="telefono"
                        checked={formData.contactPreference.includes('telefono')}
                        onChange={(e) => setFormData({
                          ...formData,
                          contactPreference: [e.target.value]
                        })}
                      />
                      Teléfono
                    </RadioLabel>
                    <RadioLabel error={errors.contactPreference}>
                      <input
                        type="radio"
                        name="contactPreference"
                        value="email"
                        checked={formData.contactPreference.includes('email')}
                        onChange={(e) => setFormData({
                          ...formData,
                          contactPreference: [e.target.value]
                        })}
                      />
                      Email
                    </RadioLabel>
                  </RadioContainer>
                </PreferenceGroup>

                <PreferenceGroup>
                  <CheckboxTitle error={errors.contactDays}>
                    Días de Contacto *
                  </CheckboxTitle>
                  <RadioContainer>
                    <RadioLabel error={errors.contactDays}>
                      <input
                        type="radio"
                        name="contactDays"
                        value="lunVier"
                        checked={formData.contactDays.includes('lunVier')}
                        onChange={(e) => setFormData({
                          ...formData,
                          contactDays: [e.target.value]
                        })}
                      />
                      Lun-Vier
                    </RadioLabel>
                    <RadioLabel error={errors.contactDays}>
                      <input
                        type="radio"
                        name="contactDays"
                        value="fSemana"
                        checked={formData.contactDays.includes('fSemana')}
                        onChange={(e) => setFormData({
                          ...formData,
                          contactDays: [e.target.value]
                        })}
                      />
                      F/Semana
                    </RadioLabel>
                  </RadioContainer>
                </PreferenceGroup>

                <PreferenceGroup>
                  <CheckboxTitle error={errors.contactTime}>
                    Horario de Contacto *
                  </CheckboxTitle>
                  <RadioContainer>
                    <RadioLabel error={errors.contactTime}>
                      <input
                        type="radio"
                        name="contactTime"
                        value="manana"
                        checked={formData.contactTime.includes('manana')}
                        onChange={(e) => setFormData({
                          ...formData,
                          contactTime: [e.target.value]
                        })}
                      />
                      Mañana
                    </RadioLabel>
                    <RadioLabel error={errors.contactTime}>
                      <input
                        type="radio"
                        name="contactTime"
                        value="tarde"
                        checked={formData.contactTime.includes('tarde')}
                        onChange={(e) => setFormData({
                          ...formData,
                          contactTime: [e.target.value]
                        })}
                      />
                      Tarde
                    </RadioLabel>
                  </RadioContainer>
                </PreferenceGroup>

                <FormSection>
                  <TextAreaContainer>
                    <TextArea
                      name="observations"
                      placeholder="Observaciones generales"
                      value={formData.observations}
                      onChange={(e) => setFormData({ ...formData, observations: e.target.value })}
                      style={{ flex: 1, minHeight: '150px' }}
                    />
                  </TextAreaContainer>
                </FormSection>
              </Section>

              <Divider />

              <Section>
                <h2>Agendar una Cita</h2>
                <Calendar
                  onSelectDate={handleDateSelect}
                  selectedDate={selectedDate}
                />
                <PreferenceGroup>
                  <CheckboxTitle>Horario de Cita</CheckboxTitle>
                  <Select
                    name="appointmentTime"
                    value={formData.appointmentTime}
                    onChange={(e) => setFormData({
                      ...formData,
                      appointmentTime: e.target.value
                    })}
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
                  <CheckboxTitle>Medio de la Cita</CheckboxTitle>
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
                      Zoom
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
                      Google Meet
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
                      WhatsApp
                    </RadioLabel>
                  </RadioContainer>
                </PreferenceGroup>
                <Captcha onVerify={setIsCaptchaVerified} />
              </Section>
            </FormGrid>


            <CustomButtonGroup>
              <ClearButton
                variant="secondary"
                size="small" 
                onClick={handleReset}
              >
                Vaciar
              </ClearButton>
              <SubmitButton
                variant="primary"
                size="small"  
                type="submit"
              >
                Enviar
              </SubmitButton>
            </CustomButtonGroup>
          </form>
        </FormContainer>
      </ContactWrapper>

      <StandardPopup
        isOpen={showPopup}
        onClose={handleClosePopup}
        title={submitStatus.success ? "¡Envío Exitoso!" : "Error"}
      >
        <PopupMessage>
          <StatusIcon>{submitStatus.success ? "✅" : "❌"}</StatusIcon>
          <MessageText>{submitStatus.message}</MessageText>
        </PopupMessage>
      </StandardPopup>
    </PageContainer>
  );
}

export default Contact;