import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { floatingStyles } from '../styles/Animations.js';

const CaptchaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 0.5rem 0;
  padding: 1rem;
  background: ${props => props.theme.colors.primaryBackground};
  border-radius: 8px;
  border: 1px solid ${props => props.$hasError ? '#ff3333' : `${props.theme.colors.secondaryBackground}40`};
`;

const CaptchaDisplay = styled.div`
  font-family: 'Courier New', monospace;
  font-size: 2rem;
  letter-spacing: 3px;
  background: ${props => props.theme.colors.primaryBackground};
  border-radius: 4px;
  user-select: none;
  padding: 0.5rem 1rem;
  ${floatingStyles()} 
`;

const CaptchaInput = styled.input`
  width: 200px;
  padding: 0.8rem;
  margin-bottom: 0.5rem;
  border: 1px solid ${props => props.$hasError ? '#ff3333' : `${props.theme.colors.accent}40`};
  border-radius: 8px;
  background: rgba(30, 30, 30, 0.7);
  color: ${props => props.theme.colors.text};
  text-align: center;
  font-size: 1rem;
`;

const ErrorMessage = styled.p`
  color: #ff3333;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

const Captcha = ({ onVerify }) => {
    const { t } = useTranslation();
    const [captchaCode, setCaptchaCode] = useState('');
    const [userInput, setUserInput] = useState('');
    const [error, setError] = useState('');

    const generateCaptcha = () => {
        const characters = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789';
        let result = '';
        for (let i = 0; i < 3; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        setCaptchaCode(result);
        setUserInput('');
        setError('');
        onVerify(false); // Reset verificación cuando se genera nuevo captcha
    };

    useEffect(() => {
        generateCaptcha();
    }, []);

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
        setError('');
    };

    const handleVerify = () => {
        if (userInput.toLowerCase() === captchaCode.toLowerCase()) {
            onVerify(true);
            setError('');
        } else {
            onVerify(false);
            setError(t('contact.captcha.error'));
            generateCaptcha();
        }
    };

    return (
        <CaptchaContainer $hasError={!!error}>
            <CaptchaDisplay>{captchaCode}</CaptchaDisplay>
            <CaptchaInput
                type="text"
                placeholder={t('contact.captcha.placeholder')}
                value={userInput}
                onChange={handleInputChange}
                onBlur={handleVerify}
                $hasError={!!error}
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </CaptchaContainer>
    );
};

export default Captcha;