import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import PageAnimation from '../components/PageAnimation';
import Calendar from '../components/Calendar';

const ContactWrapper = styled.div`
  padding: 2rem;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentContainer = styled.div`
  display: flex;
  width: 80%;
  max-width: 1200px;
  margin-bottom: 2rem;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  @media (max-width: 768px) {
    flex-direction: column;
    width: 95%;
  }
`;

const Section = styled.div`
  width: 50%;
  padding: 2rem;
  background-color: ${props => props.primary ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.1)'};
  color: ${props => props.theme.colors.text};
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem; // Added space between elements
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.colors.primary};
  font-size: 2rem;
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  background-color: rgba(255, 255, 255, 0.1);
  color: ${props => props.theme.colors.text};
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  &:focus {
    outline: none;
    box-shadow: 0 0 10px ${props => props.theme.colors.primary};
  }
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  background-color: rgba(255, 255, 255, 0.1);
  color: ${props => props.theme.colors.text};
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 8px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: all 0.3s ease;
  &:focus {
    outline: none;
    box-shadow: 0 0 10px ${props => props.theme.colors.primary};
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const CheckboxTitle = styled.h4`
  color: ${props => props.theme.colors.accent};
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const StyledCalendar = styled(Calendar)`
  width: 100%;
  margin-bottom: 1rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const Button = styled(motion.button)`
  padding: 0.8rem 2rem;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.background};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  transition: all 0.3s ease;
  &:hover {
    background-color: ${props => props.theme.colors.accent};
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    contactPreference: '',
    contactDays: '',
    contactTime: '',
    appointmentDate: '',
    appointmentTime: '10:00',
    appointmentMedium: '',
    observations: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData(prevData => ({
        ...prevData,
        [name]: checked ? value : ''
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleDateSelect = (date) => {
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
      contactPreference: '',
      contactDays: '',
      contactTime: '',
      appointmentDate: '',
      appointmentTime: '10:00',
      appointmentMedium: '',
      observations: ''
    });
  };

  return (
    <ContactWrapper>
      <ContentContainer>
        <Section primary>
          <SectionTitle>Información de Contacto</SectionTitle>
          <SectionContent>
            <Form>
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
              <Input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Teléfono (opcional)"
              />
              <Input
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Empresa (opcional)"
              />

              <CheckboxGroup>
                <CheckboxTitle>Preferencias de Contacto</CheckboxTitle>
                <CheckboxContainer>
                  {['Teléfono', 'Email', 'Indistinto'].map(option => (
                    <CheckboxLabel key={option}>
                      <input
                        type="checkbox"
                        name="contactPreference"
                        value={option.toLowerCase()}
                        checked={formData.contactPreference === option.toLowerCase()}
                        onChange={handleChange}
                      />
                      {option}
                    </CheckboxLabel>
                  ))}
                </CheckboxContainer>
              </CheckboxGroup>

              <CheckboxGroup>
                <CheckboxTitle>Días de Contacto</CheckboxTitle>
                <CheckboxContainer>
                  {['Lunes a Viernes', 'Fines de Semana', 'Todos los días'].map(option => (
                    <CheckboxLabel key={option}>
                      <input
                        type="checkbox"
                        name="contactDays"
                        value={option.toLowerCase().replace(/ /g, '-')}
                        checked={formData.contactDays === option.toLowerCase().replace(/ /g, '-')}
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
                        checked={formData.contactTime === option.toLowerCase()}
                        onChange={handleChange}
                      />
                      {option}
                    </CheckboxLabel>
                  ))}
                </CheckboxContainer>
              </CheckboxGroup>
            </Form>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>Agendar Cita</SectionTitle>
          <SectionContent>
            <StyledCalendar onSelectDate={handleDateSelect} />
            <CheckboxTitle>Horario de Cita</CheckboxTitle>
            <Input
              name="appointmentTime"
              type="time"
              value={formData.appointmentTime}
              onChange={handleChange}
            />

            <CheckboxGroup>
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
            </CheckboxGroup>

            <TextArea
              name="observations"
              value={formData.observations}
              onChange={handleChange}
              placeholder="Observaciones generales"
            />
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