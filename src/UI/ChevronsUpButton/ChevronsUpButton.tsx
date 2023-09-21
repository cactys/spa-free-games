import styles from './ChevronsUpButton.module.scss';
import { BsChevronBarUp } from 'react-icons/bs';

const ChevronsUpButton = () => {
  return (
    <div className={styles.wrapper}>
      <BsChevronBarUp size={16} />
    </div>
  );
};

export default ChevronsUpButton;
