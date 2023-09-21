import type { Action } from 'redux';

export interface IGame {
  developer: string;
  freetogame_profile_url: string;
  game_url: string;
  genre: string;
  id: number;
  platform: string;
  publisher: string;
  release_date: string;
  short_description: string;
  thumbnail: string;
  title: string;
  likes: boolean;
}

export interface ICardProps {
  title: string;
  image: string;
  description: string;
  developer: string;
  genre: string;
  platform: string;
  id: number;
  likes: boolean;
}

export interface IInitialState {
  games: IGame[];
  status: string;
  error?: string | null;
}

export interface IAction extends Action {
  payload: IGame[];
}

export interface IActionPayload {
  id?: number;
  likes?: boolean;
}

export interface ISelector {
  games: IInitialState;
}
