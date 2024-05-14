'use client'



import React, { useState, useEffect } from 'react';
import ButtonGroup from './ButtonGroup';
import ChangeTextContent from '../hooks/ChangeTextContent';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import CustomParseFormat from 'dayjs/plugin/advancedFormat';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

dayjs.extend(advancedFormat, CustomParseFormat)



const TextContent: React.FC = () => {
  const [textContent, setTextContent] = useState<any>('');
  const [buttonText, setButtonText] = useState<any>('');
  const [dayText, setDayText] = useState<any>('');
  const today = `${dayjs().format('MMMM_Do').toLowerCase()}`


  
  React.useEffect(() => {
    ChangeTextContent(today, setTextContent);
    setDayText(`${dayjs().format('MMMM Do')}`)
    setButtonText(`${dayjs().format('MMMM Do')}`)
  }, [today]);

  
  const handlePreviousNextDay = (dayChoice: string) => {
    // Preprocess the input date string to remove the ordinal indicator
    const removedOrdinalDate = dayText.replace(/\b(\d+)(st|nd|rd|th)\b/g, '$1');

    // Parse the preprocessed date string using the custom format
    let parsedDate: any;
    if (dayChoice === 'previousDay') {
        parsedDate = dayjs(removedOrdinalDate, 'MMMM D', 'en').subtract(1, 'd');
    } else if (dayChoice === 'nextDay') {
        parsedDate = dayjs(removedOrdinalDate, 'MMMM D', 'en').add(1, 'd');
    }

    // Log the parsed date
    setDayText(parsedDate.format('MMMM Do'));
    ChangeTextContent(`${parsedDate.format('MMMM_Do').toLowerCase()}`, setTextContent);
    setButtonText(parsedDate.format('MMMM Do'))
    
};

  const handleDateChange = (selectedDate: string) => {
    // Call ChangeTextContent function with the selected date and setTextContent
    ChangeTextContent(selectedDate, setTextContent);
    let formattedSelectedDate = selectedDate.charAt(0).toUpperCase()+ selectedDate.slice(1)
    formattedSelectedDate = formattedSelectedDate.replace(/_/g, ' ')
    setDayText(formattedSelectedDate)
    setButtonText(formattedSelectedDate)

  
  };



  return (
    <main>
      <ButtonGroup handleDateChange={handleDateChange} buttonText={buttonText}></ButtonGroup>
      <div className="dayHeaderGroup">
      <button onClick={() => handlePreviousNextDay('previousDay')}><FontAwesomeIcon icon={faChevronLeft} /></button>
        <h1 className="dayHeaderText">{dayText}</h1>
        <button onClick={() => handlePreviousNextDay('nextDay')}> <FontAwesomeIcon icon={faChevronRight} /></button>
      </div>
      {textContent}
    </main>
  );
};

export default TextContent;
