import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CalendarWrapper = styled.div`
  background: ${props => props.theme.colors.buttonText};
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 8px;
  padding: 0.5rem;
  font-size: 0.8rem;
  width: 30%;
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const MonthYear = styled.h3`
  color: ${props => props.theme.colors.primary};
  margin: 0;
  font-size: 1rem;
`;

const Button = styled(motion.button)`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.background};
  border: none;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8rem;
`;

const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.25rem;
  flex-grow: 1;
`;

const DayCell = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1;
  background: ${props =>
        props.isSelected
            ? props.theme.colors.primary
            : props.isDisabled
                ? props.theme.colors.background + '40' // Hacemos los días deshabilitados más transparentes
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
  cursor: ${props => props.isDisabled ? 'not-allowed' : 'pointer'};
  font-size: 1rem; // Aumentamos ligeramente el tamaño de la fuente
  opacity: ${props => props.isDisabled ? 0.5 : 1};
  &:hover {
    background: ${props => !props.isDisabled && props.theme.colors.secondaryBackground};
  }
`;

const WeekdayHeader = styled.div`
  text-align: center;
  font-weight: bold;
  color: ${props => props.theme.colors.text};
  font-size: 0.7rem;
`;

const calendarVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 24,
            when: "beforeChildren",
            staggerChildren: 0.1
        }
    }
};

const cellVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
};

const Calendar = ({ onSelectDate, minDate }) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);

    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const weekdays = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

    const handlePrevMonth = () => {
        setCurrentDate(prevDate => {
            const newDate = new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1);
            return newDate >= minDate ? newDate : prevDate;
        });
    };

    const handleNextMonth = () => {
        setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
    };

    const handleDateClick = (day) => {
        const selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        if (selectedDate >= minDate) {
            setSelectedDate(selectedDate);
            onSelectDate(selectedDate);
        }
    };

    const renderDays = () => {
        const days = [];

        // Add empty cells for days before the first day of the month
        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(<DayCell key={`empty-${i}`} />);
        }

        // Add cells for each day of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
            const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
            const isDisabled = date < minDate;

            days.push(
                <DayCell
                    key={day}
                    onClick={() => !isDisabled && handleDateClick(day)}
                    isSelected={isSelected}
                    isDisabled={isDisabled}
                    whileHover={{ scale: isDisabled ? 1 : 1.1 }}
                    whileTap={{ scale: isDisabled ? 1 : 0.9 }}
                >
                    {day}
                </DayCell>
            );
        }

        return days;
    };

    return (
        <CalendarWrapper as={motion.div} variants={calendarVariants} initial="hidden" animate="visible">
            <CalendarHeader>
                <Button onClick={handlePrevMonth} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    &lt;
                </Button>
                <MonthYear>{`${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`}</MonthYear>
                <Button onClick={handleNextMonth} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    &gt;
                </Button>
            </CalendarHeader>
            <DaysGrid>
                {weekdays.map(day => (
                    <WeekdayHeader key={day}>{day}</WeekdayHeader>
                ))}
                {renderDays().map((day, index) => (
                    <motion.div key={index} variants={cellVariants}>
                        {day}
                    </motion.div>
                ))}
            </DaysGrid>
        </CalendarWrapper>
    );
};

export default Calendar;