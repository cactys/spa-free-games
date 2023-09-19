import { useSelector } from '../../services/hooks';
import { ISelector } from '../../services/interfaces';

import Card from '../Card/Card';
import styles from './Cards.module.scss';

const Cards = () => {
  const { games } = useSelector((state: ISelector) => state.games);

  return (
    <section className={styles.wrapper}>
      {games &&
        games.map((game) => (
          <Card
            key={game.id}
            title={game.title}
            image={game.thumbnail}
            description={game.short_description}
            developer={game.developer}
            genre={game.genre}
            platform={game.platform}
            id={game.id}
          />
        ))}
    </section>
  );
};

export default Cards;
