import styles from './HeartIcon.module.scss';
import { BsBookmarkHeart } from 'react-icons/bs';

const HeartIcon = ({ isLiked }: { isLiked: boolean }) => {
  return (
    <div className={styles.wrapper}>
      {isLiked ? (
        <div className={styles.wrapper__active}>
          <BsBookmarkHeart size={16} />
        </div>
      ) : (
        <div className={styles.wrapper__inactive}>
          <BsBookmarkHeart size={16} />
        </div>
      )}
    </div>
  );
};

export default HeartIcon;
