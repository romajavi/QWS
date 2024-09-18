import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import PageAnimation from '../components/PageAnimation';
import Select from 'react-select';

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #333; // Fondo gris oscuro
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  background-color: #444; // Fondo gris más claro
  color: white;
`;



const StyledSelect = styled(Select)`
  margin-bottom: 1rem;
  .react-select__control {
    background-color: #444;
    border: none;
  }
  .react-select__single-value {
    color: white;
  }
  .react-select__menu {
    background-color: #444;
  }
  .react-select__option {
    color: white;
  }
`;

const TextArea = styled.textarea`
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  background-color: #444;
  color: white;
  min-height: 150px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.primary};
  color: black;
  cursor: pointer;
  flex: 1;
  margin: 0 0.5rem;
`;

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        contactPreference: '',
        contactTime: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send(
            'YOUR_SERVICE_ID',
            'YOUR_TEMPLATE_ID',
            formData,
            'YOUR_USER_ID'
        )
            .then((result) => {
                console.log(result.text);
                alert('Mensaje enviado con éxito!');
            }, (error) => {
                console.log(error.text);
                alert('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.');
            });
    };

    const handleReset = () => {
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
            contactPreference: '',
            contactTime: ''
        });
    };

    return (
        <ContactWrapper>
            <h1>Contacto</h1>
            <Form onSubmit={handleSubmit}>
                <Input name="name" value={formData.name} onChange={handleChange} placeholder="Nombre" required />
                <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
                <Input name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Teléfono" required />
                <StyledSelect
                    name="contactPreference"
                    value={formData.contactPreference}
                    onChange={(selectedOption) => handleChange({ target: { name: 'contactPreference', value: selectedOption.value } })}
                    options={[
                        { value: 'weekdays', label: 'Lunes a Viernes' },
                        { value: 'weekends', label: 'Fines de semana' },
                        { value: 'everyday', label: 'Todos los días' },
                    ]}
                    placeholder="Seleccione preferencia de contacto"
                />
                <StyledSelect
                    name="contactTime"
                    value={formData.contactTime}
                    onChange={(selectedOption) => handleChange({ target: { name: 'contactTime', value: selectedOption.value } })}
                    options={[
                        { value: 'morning', label: '00:00 - 12:00' },
                        { value: 'afternoon', label: '12:00 - 18:00' },
                        { value: 'evening', label: '18:00 - 00:00' },
                    ]}
                    placeholder="Seleccione horario de contacto"
                />
                <TextArea name="message" value={formData.message} onChange={handleChange} placeholder="Mensaje" required />
                <ButtonContainer>
                    <Button type="submit">Enviar</Button>
                    <Button type="button" onClick={handleReset}>Vaciar</Button>
                </ButtonContainer>
            </Form>
        </ContactWrapper>
    );
};


export default PageAnimation(Contact);