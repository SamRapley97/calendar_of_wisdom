'use client'


import React, { useState, useEffect } from 'react';
import ButtonGroup from './ButtonGroup';
import ChangeTextContent from '../hooks/ChangeTextContent';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';


dayjs.extend(advancedFormat)



const TextContent: React.FC = () => {
  const [textContent, setTextContent] = useState<any>('');
  const [dayText, setDayText] = useState<any>('');
  const today = `${dayjs().format('MMMM').toLowerCase()}_${dayjs().format('Do').toLowerCase()}`


  
  React.useEffect(() => {
    ChangeTextContent(today, setTextContent);
    setDayText(`${dayjs().format('MMMM')} ${dayjs().format('Do')}`)
  }, [today]);

  
  const handleDateChange = (selectedDate: string) => {
    // Call ChangeTextContent function with the selected date and setTextContent
    ChangeTextContent(selectedDate, setTextContent);
    let formattedSelectedDate = selectedDate.charAt(0).toUpperCase()+ selectedDate.slice(1)
    formattedSelectedDate = formattedSelectedDate.replace(/_/g, ' ')
    setDayText(formattedSelectedDate)
  };



  return (
    <main>
      <ButtonGroup handleDateChange={handleDateChange}></ButtonGroup>
      <h1>{dayText}</h1>
      {textContent}
    </main>
  );
};

export default TextContent;
