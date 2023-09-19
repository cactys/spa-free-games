import styles from './TrashIcon.module.scss';
import { BsTrash3 } from 'react-icons/bs';

const TrashIcon = ({
  removeCard,
  id,
}: {
  removeCard: (v: number) => void;
  id: number;
}) => {
  const handleDelete = () => {
    removeCard(id);
  };
  return (
    <div className={styles.wrapper} onClick={handleDelete}>
      <BsTrash3 size={16} />
    </div>
  );
};

export default TrashIcon;
