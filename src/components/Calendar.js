import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Button from './Button.js';


const CalendarWrapper = styled.div`
  background: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 8px;
  padding: 0.5rem;
  font-size: 0.8rem;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  margin-bottom: 0.5rem; // Reducido significativamente
  display: flex;
  flex-direction: column;
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const MonthYear = styled.h3`
  color: ${props => props.theme.colors.text};
  margin-bottom: 0.2rem;
  font-size: 0.9rem;
`;

const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.1rem;
  flex-grow: 1;
  padding: 0.1rem;
`;

const DayCell = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1;
  min-height: 10px; 
  min-width: 10px;  
  padding: 0.1rem;
  background: ${props =>
        props.$isSelected
            ? props.theme.colors.primary
            : props.$isDisabled
                ? props.theme.colors.background + '40'
                : 'transparent'
    };
  color: ${props =>
        props.$isSelected
            ? props.theme.colors.background
            : props.$isDisabled
                ? props.theme.colors.text + '40'
                : props.theme.colors.text
    };
  border-radius: 50%;
  cursor: ${props => (props.$isDisabled ? 'not-allowed' : 'pointer')};
  font-size: 0.7rem;
  opacity: ${props => props.$isDisabled ? 0.5 : 1};
  
  &:hover {
    background: ${props =>
        !props.isDisabled && props.theme.colors.secondaryBackground};
  }
`;

const WeekdayHeader = styled.div`
  text-align: center;
  font-weight: bold;
  color: ${props => props.theme.colors.accent};
  font-size: 0.7rem;
`;


// Reemplazar el CalendarNavButton existente con:
const CalendarNavButton = styled(Button)`
  /* Heredar los estilos base del botón pero ajustar el tamaño */
  padding: 0.3rem;
  min-width: 24px;
  height: 24px;
  font-size: 0.8rem;
  
  /* Ajustes específicos para el calendario */
  background: transparent;
  border: 1px solid ${props => props.theme.colors.accent}40;
  color: ${props => props.theme.colors.text};
  margin: 0;
  
  /* Modificar los efectos de hover para este caso específico */
  &:hover::before {
    background: ${props => props.theme.colors.accent}40;
    animation: none;
  }
  
  &:hover {
    transform: translateY(0);
    box-shadow: 0 0 8px ${props => props.theme.colors.accent}40;
  }
  
  /* Mantener el efecto al hacer click pero más sutil */
  &:active {
    transform: scale(0.95);
  }
`;

const Calendar = ({ onSelectDate, minDate }) => {
    const { i18n } = useTranslation();
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);

    const daysInMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
    ).getDate();

    const firstDayOfMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1
    ).getDay();

    const monthNames = {
        es: [
            "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
            "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
        ],
        en: [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ],
        pt: [
            "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
            "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
        ]
    };

    const weekdaysText = {
        es: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
        en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        pt: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]
    };

    const weekdays = weekdaysText[i18n.language] || weekdaysText.es;

    const handlePrevMonth = (e) => {
        e.preventDefault();
        e.stopPropagation();

        setCurrentDate(prevDate => {
            const newDate = new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1);
            const today = new Date();
            today.setDate(1); // Establecer al primer día del mes actual
            today.setHours(0, 0, 0, 0);
            return newDate >= today ? newDate : prevDate;
        });
    };

    const handleNextMonth = (e) => {
        e.preventDefault();
        e.stopPropagation();

        setCurrentDate(prevDate => {
            const newDate = new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1);
            const maxDate = new Date();
            maxDate.setMonth(maxDate.getMonth() + 3); // Permitir hasta 3 meses en adelante
            return newDate <= maxDate ? newDate : prevDate;
        });
    };

    const handleDateClick = (day) => {
        const selectedDate = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            day
        );

        if (selectedDate >= minDate) {
            setSelectedDate(selectedDate);
            onSelectDate(selectedDate);
        }
    };

    const isDateDisabled = (day) => {
        const date = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            day
        );

        // Comprobar si es domingo (0 es domingo en JavaScript)
        const isDomingo = date.getDay() === 0;

        // Retornar true si es domingo O si la fecha es anterior a la fecha mínima
        return isDomingo || date < minDate;
    };

    const renderDays = () => {
        const days = [];

        // Días vacíos al inicio del mes
        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(<DayCell key={`empty-${i}`} />);
        }

        // Días del mes
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                day
            );

            const isSelected = selectedDate &&
                date.toDateString() === selectedDate.toDateString();
            const isDisabled = isDateDisabled(day);

            days.push(
                <DayCell
                    key={day}
                    onClick={() => !isDisabled && handleDateClick(day)}
                    $isSelected={isSelected}
                    $isDisabled={isDisabled}
                    whileHover={!isDisabled ? { scale: 1.1 } : {}}
                    whileTap={!isDisabled ? { scale: 0.95 } : {}}
                >
                    {day}
                </DayCell>
            );
        }

        return days;
    };

    return (
        <CalendarWrapper>
            <CalendarHeader>
                <CalendarNavButton
                    variant="calendar"
                    onClick={handlePrevMonth}
                >
                    &lt;
                </CalendarNavButton>
                <MonthYear>
                    {`${(monthNames[i18n.language] || monthNames.es)[currentDate.getMonth()]} ${currentDate.getFullYear()}`}
                </MonthYear>
                <CalendarNavButton
                    variant="calendar"
                    onClick={handleNextMonth}
                >
                    &gt;
                </CalendarNavButton>
            </CalendarHeader>
            <DaysGrid>
                {weekdays.map(day => (
                    <WeekdayHeader key={day}>{day}</WeekdayHeader>
                ))}
                {renderDays()}
            </DaysGrid>
        </CalendarWrapper>
    );
};

Calendar.defaultProps = {
    minDate: new Date()
};

export default Calendar;