import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import PageAnimation from '../components/PageAnimation';
import Calendar from '../components/Calendar';

const ContactWrapper = styled.div`
  padding: 1rem;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.8em;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 800px;
  margin: 1rem auto;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
`;

const Section = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: ${props => props.theme.colors.primaryBackground};
  color: ${props => props.theme.colors.text};
`;

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
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
  gap: 2rem; // Aumentamos la separación entre los campos
  width: 80%;
  margin-bottom: 1rem; // Añadimos margen inferior para separar los grupos
`;

const Input = styled.input`
  padding: 0.4rem;
  background-color: rgba(255, 255, 255, 0.1);
  color: ${props => props.theme.colors.text};
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 4px;
  font-size: 0.8rem;
  width: 100%;
  &:focus {
    outline: none;
    box-shadow: 0 0 5px ${props => props.theme.colors.primary};
  }
`;

const TextArea = styled.textarea`
  padding: 0.4rem;
  background-color: rgba(255, 255, 255, 0.1);
  color: ${props => props.theme.colors.text};
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 4px;
  font-size: 0.8rem;
  min-height: 60px;
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

const StyledCalendar = styled(Calendar)`
  width: 50%; // Reducimos el tamaño al 50% del tamaño anterior
  aspect-ratio: 1;
  margin: 0 auto; // Centramos el calendario
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

const SelectedDate = styled.p`
  color: ${props => props.theme.colors.accent};
  font-size: 0.8rem;
  margin-top: 0.5rem;
  text-align: center;
`;

const AppointmentGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  margin-top: 1rem; // Añadimos margen superior para separar del calendario
`;

const TimeInput = styled(Input)`
  width: auto;
`;

const TimeSelector = styled.select`
  padding: 0.4rem;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 4px;
  font-size: 0.8rem;
  width: auto;
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
        // Para appointmentMedium, solo permitimos una selección
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
    for (let hour = 0; hour < 24; hour++) {
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
    <ContactWrapper>
      <ContentContainer>
        <Section>
          <SectionTitle>Información de Contacto</SectionTitle>
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
            <StyledCalendar onSelectDate={handleDateSelect} minDate={tomorrow} />
            {selectedDate && (
              <SelectedDate>
                Fecha seleccionada: {selectedDate.toLocaleDateString()}
              </SelectedDate>
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

      </ContentContainer>

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
  );
};


export default PageAnimation(Contact);