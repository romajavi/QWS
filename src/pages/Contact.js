import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import PageAnimation from '../components/PageAnimation';
import Calendar from '../components/Calendar';
import PageContainer from '../components/PageContainer';
import { pageContainerStyle } from '../styles/GlobalStyles';

const ContactWrapper = styled.div`
  ${pageContainerStyle}
  min-height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 0;
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 800px;
  background-color: ${props => props.theme.colors.primaryBackground};
  border-radius: 50px;
  overflow: hidden;
  margin: 1rem 0;
`;

const Section = styled.div`
  width: 100%;
  padding: 1.5rem;
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.primaryBackground};

  &:not(:last-child) {
    border-bottom: 1px solid ${props => props.theme.colors.primaryBackground}; // Cambia el color del borde al mismo color del fondo
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
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 0.75rem;
  color: ${props => props.theme.colors.primary};
  font-size: 1.2rem;
  text-shadow: 0 0 5px rgba(255, 215, 0, 0.3);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  align-items: center;
`;

const InputGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem; 
  width: 80%; 
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  padding: 0.4rem;
  background-color: ${props => props.theme.colors.primaryBackground} !important;
  color: ${props => props.theme.colors.text};
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 4px;
  font-size: 0.8rem;
  width: 100%;
  &:focus {
    outline: none;
    box-shadow: 0 0 5px ${props => props.theme.colors.primary};
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
  padding: 0.4rem;
  background-color: ${props => props.theme.colors.primaryBackground};
  color: ${props => props.theme.colors.text};
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 4px;
  font-size: 0.8rem;
  min-height: 90px;
  resize: vertical;
  width: 80%;
  &:focus {
    outline: none;
    box-shadow: 0 0 5px ${props => props.theme.colors.primary};
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: center;
  width: 100%;
`;

const CheckboxColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  width: 80%;
  justify-content: center;
  align-items: start;
  text-align: center;
`;

const CheckboxTitle = styled.h4`
  color: ${props => props.theme.colors.accent};
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
  text-align: center;
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
  font-size: 0.8rem;
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const CalendarContainer = styled.div`
  width: 40%;
  margin: 0 auto;
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
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Button = styled(motion.button)`
  padding: 0.4rem 1rem;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.background};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
  &:hover {
    background-color: ${props => props.theme.colors.accent};
  }
`;

const SelectedDateTime = styled.p`
  color: ${props => props.theme.colors.accent};
  font-size: 0.8rem;
  margin-top: 0.5rem;
  text-align: center;
`;

const AppointmentGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  padding: 1.5rem;
  margin-top: 1.5rem;
`;

const TimeSelector = styled.select`
  padding: 0.4rem;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 4px;
  font-size: 0.8rem;
  width: auto;
  display: block;
  margin: 0 auto;
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
    }
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setFormData(prevData => ({
      ...prevData,
      appointmentDate: date.toISOString().split('T')[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Formulario enviado con éxito!');
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

  const calendarVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
        duration: 0.5
      }
    }
  };

  return (
    <PageContainer>
      <ContactWrapper>
        <Title>Contacto</Title>
        <FormContainer>
          <Section>
            <SectionTitle>Información</SectionTitle>
            <SectionContent>
              <Form>
                <InputGroup>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nombre"
                    required
                  />
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                  />
                </InputGroup>
                <InputGroup>
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Teléfono"
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
                      {['Lunes a Viernes', 'Fines de Semana', 'Todos los días'].map(option => (
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
                      {['Mañanas', 'Tardes', 'Noches', 'Cualquier Hora'].map(option => (
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
              </Form>
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>Agendar Cita</SectionTitle>
            <SectionContent>
              <CalendarContainer>
                <motion.div
                  variants={calendarVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <StyledCalendar onSelectDate={handleDateSelect} minDate={tomorrow} />
                </motion.div>
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
                    <CheckboxTitle style={{ fontSize: '0.8rem', marginBottom: '0.5rem' }}>Horario de Cita</CheckboxTitle>
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
        </FormContainer>

        <ButtonContainer>
          <Button
            type="submit"
            onClick={handleSubmit}
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
      </ContactWrapper>
    </PageContainer>
  );
};

export default PageAnimation(Contact);