import { IGame } from '../services/interfaces';

export const filter = (cards: IGame[], filterChecked: boolean) => {
  console.log(filterChecked);
  return filterChecked
    ? cards.filter((card) => card.likes === filterChecked)
    : cards;
};
