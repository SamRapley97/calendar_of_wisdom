import React, { useState, useEffect, useRef } from 'react';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

dayjs.extend(advancedFormat)

interface DropdownProps {
  handleDateChange: (selectedDate: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ handleDateChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState<any>(null)
  const [selectedDay, setSelectedDay] = useState<any>(null);
  const [buttonText, setButtonText] = useState(`${dayjs().format('MMMM')} ${dayjs().format('Do')}`);
  const dropdownRef = useRef<any>()




  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setIsSubMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setIsSubMenuOpen(false);
  };

  const handleSubMenuToggle = (month: any) => {
    setSelectedMonth(month);
    setIsSubMenuOpen(true);
  };

  const handleDaySelection = (day: any) => {
    setSelectedDay(day);
    setButtonText(`${selectedMonth} ${day}`);
    handleDateChange(`${selectedMonth.toLowerCase()}_${day.toLowerCase()}`)
    setIsSubMenuOpen(false);
    setIsOpen(false);
  

  };

  const generateDaysArray = () => {
    if (!selectedMonth) return [];
    const monthIndex = months.indexOf(selectedMonth);
    const numberOfDays = new Date(new Date().getFullYear(), monthIndex + 1, 0).getDate();
    return Array.from({ length: numberOfDays }, (_, i) => {
      const day = i + 1;
      let suffix = 'th';
      if (day === 1 || day === 21 || day === 31) suffix = 'st';
      else if (day === 2 || day === 22) suffix = 'nd';
      else if (day === 3 || day === 23) suffix = 'rd';
      return `${day}${suffix}`;
    });
  };

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const days = generateDaysArray();


  return (

    <div className="group inline-block" ref={dropdownRef}>
      <button className="dropdownBtn" onClick={handleToggle}>
        {buttonText}
      </button>
      <ul className={`dayPicker ${isOpen ? 'open' : ''}`}>
        {months.map((month, index) => (
          <li key={index} onClick={() => handleSubMenuToggle(month)} className={selectedMonth === month ? 'selected' : ''}>{month}</li>
        ))}
      </ul>
      <ul className={`dayPicker sub-menu ${isSubMenuOpen ? 'open' : ''}`}>
        {days.map((day, index) => (
          <li key={index} onClick={() => handleDaySelection(day)}>{day}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
