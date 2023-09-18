import { ICardProps } from '../../services/interfaces';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BsTrash3, BsBookmarkHeartFill, BsBookmarkHeart } from 'react-icons/bs';

import styles from './Card.module.scss';
import TrashIcon from '../../UI/TrashIcon/TrashIcon';

const Card = ({
  title,
  image,
  description,
  developer,
  genre,
  platform,
}: ICardProps) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={image} alt={title} />
      <TrashIcon />
      <div className={styles['card-body']}>
        <h2 className={styles['card-title']}>{title}</h2>
        <div className={styles['card-list']}>
          <p className={styles['card-item']}>
            <span>Developer: </span>
            {developer}
          </p>
          <p className={styles['card-item']}>
            <span>Platform: </span>
            {platform}
          </p>
          <p className={styles['card-item']}>
            <span>Genre: </span>
            {genre}
          </p>
          <p className={styles['card-item']}>
            <span>Description: </span>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
