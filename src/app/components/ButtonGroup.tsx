import Link from 'next/link';
import Dropdown from './DropdownButton';

interface ButtonGroupProps {
    handleDateChange: (selectedDate: string) => void;
  }

  const ButtonGroup: React.FC<ButtonGroupProps> = ({ handleDateChange }) => {

  return (
    <main>
      <section className="buttonGroup">
        <Link href="/about" passHref>
          <button className="navButton">
            About
          </button>
        </Link>
        <Dropdown handleDateChange={handleDateChange} />
      </section>
      
    </main>
  );
};

export default ButtonGroup;