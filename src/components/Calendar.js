import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CalendarWrapper = styled.div`
  background: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const MonthYear = styled.h3`
  color: ${props => props.theme.colors.primary};
  margin: 0;
`;

const Button = styled(motion.button)`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.background};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
`;

const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
`;

const DayCell = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5rem;
  background: ${props => props.isSelected ? props.theme.colors.primary : 'transparent'};
  color: ${props => props.isSelected ? props.theme.colors.background : props.theme.colors.text};
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: ${props => props.theme.colors.primary}40;
  }
`;

const WeekdayHeader = styled.div`
  text-align: center;
  font-weight: bold;
  color: ${props => props.theme.colors.accent};
`;

const Calendar = ({ onSelectDate }) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);

    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const weekdays = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

    const handlePrevMonth = () => {
        setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
    };

    const handleDateClick = (day) => {
        const selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        setSelectedDate(selectedDate);
        onSelectDate(selectedDate);
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

            days.push(
                <DayCell
                    key={day}
                    onClick={() => handleDateClick(day)}
                    isSelected={isSelected}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
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
                {renderDays()}
            </DaysGrid>
        </CalendarWrapper>
    );
};

export default Calendar;