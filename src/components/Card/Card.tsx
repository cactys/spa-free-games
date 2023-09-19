import { ICardProps } from '../../services/interfaces';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BsTrash3, BsBookmarkHeartFill, BsBookmarkHeart } from 'react-icons/bs';

import styles from './Card.module.scss';
import TrashIcon from '../../UI/TrashIcon/TrashIcon';
import HeartIcon from '../../UI/HeartIcon/HeartIcon';
import { useDispatch } from '../../services/hooks';
import { removeCard } from '../../services/slices/gameSlice';

const Card = ({
  title,
  image,
  description,
  developer,
  genre,
  platform,
  id,
}: ICardProps) => {
  const dispatch = useDispatch();

  const handleRemoveCard = (id: number) => {
    dispatch(removeCard({ id }));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.button}>
        <TrashIcon removeCard={handleRemoveCard} id={id} />
      </div>
      <img className={styles.image} src={image} alt={title} />
      <div className={styles.card}>
        <div className={styles.card__header}>
          <h2 className={styles.card__title}>{title}</h2>
          <HeartIcon isLiked={false} />
        </div>
        <div className={styles.card__list}>
          <p className={styles.card__item}>
            <span>Developer: </span>
            {developer}
          </p>
          <p className={styles.card__item}>
            <span>Platform: </span>
            {platform}
          </p>
          <p className={styles.card__item}>
            <span>Genre: </span>
            {genre}
          </p>
          <p className={styles.card__item}>
            <span>Description: </span>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
