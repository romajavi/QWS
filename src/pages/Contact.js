import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
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
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.background};
`;

const TextArea = styled.textarea`
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.background};
  min-height: 150px;
`;

const Button = styled(motion.button)`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.background};
  cursor: pointer;
`;

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
            from_name: name,
            from_email: email,
            phone: phone,
            message: message
        }, 'YOUR_USER_ID')
        .then((result) => {
            console.log(result.text);
            alert('Mensaje enviado con éxito!');
        }, (error) => {
            console.log(error.text);
            alert('Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.');
        });

        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
    };

    return (
        <ContactWrapper>
            <h1>Contacto</h1>
            <Form onSubmit={handleSubmit}>
                <Input 
                    type="text" 
                    placeholder="Nombre" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                />
                <Input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <Input 
                    type="tel" 
                    placeholder="Teléfono" 
                    value={phone} 
                    onChange={(e) => setPhone(e.target.value)} 
                    required 
                />
                <TextArea 
                    placeholder="Mensaje" 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    required 
                />
                <Button 
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Enviar
                </Button>
            </Form>
        </ContactWrapper>
    );
}

export default Contact;