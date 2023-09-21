import styles from './HeartIcon.module.scss';
import { BsBookmarkHeart } from 'react-icons/bs';

const HeartIcon = ({
  isLiked,
  onClick,
}: {
  isLiked: boolean;
  onClick: VoidFunction;
}) => {
  return (
    <div className={styles.wrapper} onClick={onClick}>
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
