import ReactHtmlParser from 'html-react-parser';

const ChangeTextContent = (selectedDate: string, setTextContent: (content: any) => void) => {
  // Specify the URL of the HTML file in your S3 bucket
  const url = `https://calendar-of-wisdom.s3.amazonaws.com/${selectedDate}.html`;

  // Fetch the HTML file from the S3 bucket
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch HTML file');
      }
      return response.text();
    })
    .then(htmlString => {
      // Update the date content with the HTML file content
      setTextContent(ReactHtmlParser(htmlString));
    })
    .catch(error => {
      console.error('Error reading HTML file:', error);
      setTextContent('');
    });
};

export default ChangeTextContent;
