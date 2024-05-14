import Link from 'next/link';
import Dropdown from './DropdownButton';

interface ButtonGroupProps {
    handleDateChange: (selectedDate: string) => void;
    buttonText: string
  }

  const ButtonGroup: React.FC<ButtonGroupProps> = ({ handleDateChange, buttonText }) => {

  return (
    <main>
      <section className="buttonGroup">
        <Link href="/about" passHref>
          <button className="navButton">
            About
          </button>
        </Link>
        <Dropdown handleDateChange={handleDateChange} buttonText={buttonText} />
      </section>
      
    </main>
  );
};

export default ButtonGroup;