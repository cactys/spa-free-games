import { useEffect, useRef, useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useSelector } from '../../services/hooks';
import { ISelector } from '../../services/interfaces';
import ChevronsUpButton from '../../UI/ChevronsUpButton/ChevronsUpButton';
import FilterCheckbox from '../../UI/FilterCheckbox/FilterCheckbox';

import Card from '../Card/Card';
import styles from './Cards.module.scss';

const Cards = () => {
  const { games } = useSelector((state: ISelector) => state.games);
  const nodeRef = useRef<HTMLDivElement>(null);

  const [visibleCard, setVisibleCard] = useState(12);
  const [showScrollButton, setShowScrollButton] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [filterCheckbox, setFilterCheckbox] = useState(false);

  const handleLikesFilter = () => {};

  const handleScroll = () => {
    const scrolled = window.scrollY;
    const viewportHeight = window.innerHeight;
    const fullHeight = document.body.clientHeight;

    if (scrolled === 0) {
      setShowScrollButton(false);
    } else {
      setShowScrollButton(true);
    }

    if (scrolled + viewportHeight >= fullHeight) {
      setVisibleCard((prevVisibleCards) => prevVisibleCards + 4);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const visibleData = games.slice(0, visibleCard);

  return (
    <section className={styles.wrapper}>
      <FilterCheckbox
        title="Liked"
        type="checkbox"
        id="input-checkbox"
        filterCheckbox={filterCheckbox}
        handleLikesFilter={handleLikesFilter}
      />
      <TransitionGroup
        onClick={scrollToTop}
        className={styles['chevrons-button']}
      >
        {showScrollButton && (
          <CSSTransition
            nodeRef={nodeRef}
            in={showScrollButton}
            timeout={300}
            classNames={{
              enterDone: `${styles.option}`,
              enter: `${styles.option__enter}`,
              enterActive: `${styles.option__enter_active}`,
              exit: `${styles.option__exit}`,
              exitActive: `${styles.option__exit_active}`,
            }}
            unmountOnExit
          >
            <div ref={nodeRef}>
              <ChevronsUpButton />
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
      <div className={styles['cards-container']}>
        {visibleData &&
          visibleData.map((game) => (
            <Card
              key={game.id}
              title={game.title}
              image={game.thumbnail}
              description={game.short_description}
              developer={game.developer}
              genre={game.genre}
              platform={game.platform}
              id={game.id}
              likes={game.likes}
            />
          ))}
      </div>
    </section>
  );
};

export default Cards;
