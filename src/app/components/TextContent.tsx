'use client'


import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Dropdown from '../components/DropdownButton';
import AWS from 'aws-sdk';
import ReactHtmlParser from 'html-react-parser';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import 'dotenv/config'







dayjs.extend(advancedFormat)



const TextContent: React.FC = () => {
  const [textContent, setTextContent] = useState<string>('');
  const today = `${dayjs().format('MMMM').toLowerCase()}_${dayjs().format('Do').toLowerCase()}`


  const ChangeDate = (selectedDate: string) => {

  
    
    // useEffect(() => {
      // Configure AWS SDK
      AWS.config.update({
        accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
        region: process.env.NEXT_PUBLIC_AWS_REGION,
      });

      console.log(process.env.NEXT_PUBLIC_AWS_REGION,)

      // Create an S3 object
      const s3 = new AWS.S3();
  
      // Specify the parameters for retrieving the HTML file
      const params = {
        Bucket: 'calendar-of-wisdom',
        Key: selectedDate + '.html'
      };
  
      // Read the HTML file from S3
      s3.getObject(params, (err, data) => {
        if (err) {
          console.error('Error reading HTML file:', err);
          setTextContent('')
          return;
        }
  
        // Update the date content with the HTML file content
        setTextContent(ReactHtmlParser(data.Body?.toString()));
      });
    // }, []); // Empty dependency array to run the effect only once on component mount
  };


  // React.useEffect(() => {
  //   ChangeDate(today); // Example date
  // }, [today]);


  return (
    <main>
      <section className="buttonGroup">
        <Link href="/about" passHref>
          <button className="navButton">
            About
          </button>
        </Link>
        <Dropdown handleDateChange={ChangeDate} />
      </section>
      {textContent}
    </main>
  );
};

export default TextContent;
