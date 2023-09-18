import styles from './TrashIcon.module.scss';
import { BsTrash3 } from 'react-icons/bs';

const TrashIcon = () => {
  return (
    <div className={styles.wrapper}>
      <BsTrash3 size={16} />
    </div>
  );
};

export default TrashIcon;
