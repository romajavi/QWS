import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import PageAnimation from '../components/PageAnimation.js';
import Calendar from '../components/Calendar.js';
import PageContainer from '../components/PageContainer.js';
import { pageContainerStyle } from '../styles/GlobalStyles.js';

const ContactWrapper = styled.div`
  ${pageContainerStyle}
  min-height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 2rem;
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 800px;
  background-color: ${props => props.theme.colors.primaryBackground};
  border-radius: 20px;
  overflow: hidden;
  margin: 1rem 0;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Section = styled.div`
  width: 100%;
  padding: 2rem 0;
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.primaryBackground};

  &:not(:last-child) {
    border-bottom: 1px solid ${props => props.theme.colors.primary};
  }

  @media (max-width: 768px) {
    padding: 1.5rem 0;
    margin-bottom: 1.5rem;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  color: ${props => props.theme.colors.secondaryBackground};
  margin-bottom: 2rem;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 1.5rem;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.primary};
  font-size: 1.2rem;
  text-shadow: 0 0 5px rgba(255, 215, 0, 0.3);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  width: 100%;
  align-items: center;
`;

const InputGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  width: 100%;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Input = styled.input`
  padding: 0.8rem;
  background-color: ${props => props.theme.colors.primaryBackground} !important;
  color: ${props => props.theme.colors.text};
  border: 1px solid ${props => props.isInvalid ? 'red' : props.theme.colors.primary};
  border-radius: 4px;
  font-size: 0.9rem;
  width: 100%;
  &:focus {
    outline: none;
    box-shadow: 0 0 5px ${props => props.isInvalid ? 'red' : props.theme.colors.primary};
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px ${props => props.theme.colors.primaryBackground} inset !important;
    -webkit-text-fill-color: ${props => props.theme.colors.text} !important;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  background-color: ${props => props.theme.colors.primaryBackground};
  color: ${props => props.theme.colors.text};
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 4px;
  font-size: 0.9rem;
  min-height: 120px;
  resize: vertical;
  width: 100%;
  margin-top: 3rem;
  margin-bottom: 3rem;
  &:focus {
    outline: none;
    box-shadow: 0 0 5px ${props => props.theme.colors.primary};
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem; 
  align-items: center;
  width: 100%;
  margin-bottom: 1rem; 
`;

const CheckboxColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const CheckboxTitle = styled.h4`
  color: ${props => props.theme.colors.accent};
  margin-bottom: 0.5rem;
  font-size: 1rem;
  text-align: center;
  width: 100%;
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.8rem;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 0.9rem;
  margin: 0 auto;
  &:hover {
    color: ${props => props.theme.colors.primary};
  }

  input[type="checkbox"] {
    appearance: none;
    -webkit-appearance: none;
    width: 15px;
    height: 15px;
    border: 2px solid ${props => props.theme.colors.secondaryBackground};
    border-radius: 100px;
    outline: none;
    cursor: pointer;
    position: relative;

    &:checked {
      background-color: #000000;
      border-color: #000000;

      &::after {
        content: '✔';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: ${props => props.theme.colors.primary};
        font-size: 14px;
      }
    }
  }
`;

const CalendarContainer = styled.div`
  width: 100%;
  max-width: 300px;
  margin: 0 auto 2rem auto;
`;

const StyledCalendar = styled(Calendar)`
  width: 100%;
  aspect-ratio: 1;
  margin: 0 auto;
  padding: 10px;
  box-sizing: border-box;
  background-color: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 8px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 3rem;
`;

const Button = styled(motion.button)`
  padding: 0.8rem 2rem;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.background};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  &:hover {
    background-color: ${props => props.theme.colors.accent};
  }
`;

const SelectedDateTime = styled.p`
  color: ${props => props.theme.colors.accent};
  font-size: 0.9rem;
  margin: 1.5rem 0;
  text-align: center;
`;

const AppointmentGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  margin-top: 3rem;
`;

const TimeSelector = styled.select`
  padding: 0.3rem;
  background-color: ${props => props.theme.colors.secondaryBackground};
  color: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.secondaryBackground};
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
  max-width: 100px;
  display: block;
  margin: 1rem auto 0;
  text-align: center;
  &:focus {
    outline: none;
    box-shadow: 0 0 5px ${props => props.theme.colors.primary};
  }
  option {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }
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

  const [selectedDate, setSelectedDate] = useState(null);
  const [invalidFields, setInvalidFields] = useState({});
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      if (name === 'appointmentMedium') {
        setFormData(prevData => ({
          ...prevData,
          [name]: checked ? value : ''
        }));
      } else {
        setFormData(prevData => ({
          ...prevData,
          [name]: checked
            ? [...prevData[name], value]
            : prevData[name].filter(item => item !== value)
        }));
      }
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
      setInvalidFields(prevFields => ({
        ...prevFields,
        [name]: false
      }));
    }
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setFormData(prevData => ({
      ...prevData,
      appointmentDate: date.toISOString().split('T')[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requiredFields = ['name', 'email', 'phone'];
    const newInvalidFields = {};

    requiredFields.forEach(field => {
      if (!formData[field]) {
        newInvalidFields[field] = true;
      }
    });

    if (Object.keys(newInvalidFields).length > 0) {
      setInvalidFields(newInvalidFields);
      formRef.current.scrollIntoView({ behavior: 'smooth' });
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
        alert('Formulario enviado con éxito!');
        handleReset();
      } else {
        throw new Error('Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error al enviar el formulario. Por favor, inténtelo de nuevo.');
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
    setInvalidFields({});
  };

  const generateTimeOptions = () => {
    const options = [];
    for (let hour = 7; hour <= 20; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        options.push(<option key={time} value={time}>{time}</option>);
      }
    }
    return options;
  };

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);

  return (
    <PageContainer>
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
          <Form onSubmit={handleSubmit} ref={formRef}>
            <Section>
              <SectionTitle>Información</SectionTitle>
              <SectionContent>
                <InputGroup>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nombre"
                    required
                    isInvalid={invalidFields.name}
                  />
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    isInvalid={invalidFields.email}
                  />
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Teléfono"
                    required
                    isInvalid={invalidFields.phone}
                  />
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Empresa"
                  />
                </InputGroup>

                <CheckboxGroup>
                  <CheckboxTitle>Preferencias de Contacto</CheckboxTitle>
                  <CheckboxContainer>
                    {['Teléfono', 'Email', 'Indistinto'].map(option => (
                      <CheckboxLabel key={option}>
                        <input
                          type="checkbox"
                          name="contactPreference"
                          value={option.toLowerCase()}
                          checked={formData.contactPreference.includes(option.toLowerCase())}
                          onChange={handleChange}
                        />
                        {option}
                      </CheckboxLabel>
                    ))}
                  </CheckboxContainer>
                </CheckboxGroup>

                <CheckboxColumns>
                  <CheckboxGroup>
                    <CheckboxTitle>Días de Contacto</CheckboxTitle>
                    <CheckboxContainer>
                      {['Lun-Vier', 'F/Semana', 'Todos los días'].map(option => (
                        <CheckboxLabel key={option}>
                          <input
                            type="checkbox"
                            name="contactDays"
                            value={option.toLowerCase().replace(/ /g, '-')}
                            checked={formData.contactDays.includes(option.toLowerCase().replace(/ /g, '-'))}
                            onChange={handleChange}
                          />
                          {option}
                        </CheckboxLabel>
                      ))}
                    </CheckboxContainer>
                  </CheckboxGroup>

                  <CheckboxGroup>
                    <CheckboxTitle>Horario de Contacto</CheckboxTitle>
                    <CheckboxContainer>
                      {['Mañanas', 'Tardes', 'Noches'].map(option => (
                        <CheckboxLabel key={option}>
                          <input
                            type="checkbox"
                            name="contactTime"
                            value={option.toLowerCase()}
                            checked={formData.contactTime.includes(option.toLowerCase())}
                            onChange={handleChange}
                          />
                          {option}
                        </CheckboxLabel>
                      ))}
                    </CheckboxContainer>
                  </CheckboxGroup>
                </CheckboxColumns>

                <TextArea
                  name="observations"
                  value={formData.observations}
                  onChange={handleChange}
                  placeholder="Observaciones generales"
                />
              </SectionContent>
            </Section>

            <Section>
              <SectionTitle>Agendar Cita</SectionTitle>
              <SectionContent>
                <CalendarContainer>
                  <StyledCalendar onSelectDate={handleDateSelect} minDate={tomorrow} />
                </CalendarContainer>
                {selectedDate && (
                  <SelectedDateTime>
                    Fecha seleccionada: {selectedDate.toLocaleDateString()}
                    <br />
                    Hora seleccionada: {formData.appointmentTime}
                  </SelectedDateTime>
                )}
                <AppointmentGroup>
                  <CheckboxColumns>
                    <div>
                      <CheckboxTitle>Horario de Cita</CheckboxTitle>
                      <TimeSelector
                        name="appointmentTime"
                        value={formData.appointmentTime}
                        onChange={handleChange}
                      >
                        {generateTimeOptions()}
                      </TimeSelector>
                    </div>
                    <div>
                      <CheckboxTitle>Medio de la Cita</CheckboxTitle>
                      <CheckboxContainer>
                        {['Zoom', 'Google Meet', 'WhatsApp'].map(option => (
                          <CheckboxLabel key={option}>
                            <input
                              type="checkbox"
                              name="appointmentMedium"
                              value={option.toLowerCase().replace(' ', '-')}
                              checked={formData.appointmentMedium === option.toLowerCase().replace(' ', '-')}
                              onChange={handleChange}
                            />
                            {option}
                          </CheckboxLabel>
                        ))}
                      </CheckboxContainer>
                    </div>
                  </CheckboxColumns>
                </AppointmentGroup>
              </SectionContent>
            </Section>

            <ButtonContainer>
              <Button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Enviar
              </Button>
              <Button
                type="button"
                onClick={handleReset}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Vaciar
              </Button>
            </ButtonContainer>
          </Form>
        </FormContainer>
      </ContactWrapper>
    </PageContainer>
  );
};

export default PageAnimation(Contact);