import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Button from './Button.js';

const CalendarWrapper = styled.div`
  background: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 8px;
  padding: 1rem;
  font-size: 0.8rem;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  margin-bottom: 2rem; // Agregar margen inferior
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
        props.isSelected
            ? props.theme.colors.primary
            : props.isDisabled
                ? props.theme.colors.background + '40'
                : 'transparent'
    };
  color: ${props =>
        props.isSelected
            ? props.theme.colors.background
            : props.isDisabled
                ? props.theme.colors.text + '40'
                : props.theme.colors.text
    };
  border-radius: 50%;
  cursor: ${props => (props.isDisabled ? 'not-allowed' : 'pointer')};
  font-size: 0.7rem;
  opacity: ${props => props.isDisabled ? 0.5 : 1};
  
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


const CalendarNavButton = styled(Button)`
  padding: 0.3rem 0.6rem;
  min-width: auto;
  font-size: 0.8rem;
  background:  ${props => props.theme.colors.primary};
  border: 1px solid ${props => props.theme.colors.accent}40;
  
  &:hover {
    background: ${props => props.theme.colors.accent}10;
  }
`;

const Calendar = ({ onSelectDate, minDate }) => {
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

    const monthNames = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    const weekdays = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

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
                    isSelected={isSelected}
                    isDisabled={isDisabled}
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
                    {`${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`}
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