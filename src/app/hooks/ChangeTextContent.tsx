import AWS from 'aws-sdk';
import ReactHtmlParser from 'html-react-parser';

const ChangeTextContent = (selectedDate: string, setTextContent: (content: any) => void) => {
  // Configure AWS SDK
  AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
  });



  // // Create an S3 object
  const s3 = new AWS.S3();

  // Specify the parameters for retrieving the HTML file
  const params = {
    Bucket: 'calendar-of-wisdom',
    Key: selectedDate + '.html'
  };

  // Read the HTML file from S3
  s3.getObject(params, (err, data: any) => {
    if (err) {
      console.error('Error reading HTML file:', err);
      setTextContent('');
      return;
    }

    // Update the date content with the HTML file content
    setTextContent(ReactHtmlParser(data.Body?.toString()));
   
  });
};

export default ChangeTextContent;
