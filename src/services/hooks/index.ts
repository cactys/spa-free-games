import type { TypedUseSelectorHook } from 'react-redux';
import {
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from 'react-redux';

import { AppDispatch, RootState } from '..';

const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
const useDispatch = () => dispatchHook<AppDispatch>();

export { useDispatch, useSelector };
