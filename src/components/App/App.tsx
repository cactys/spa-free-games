import { useEffect } from 'react';
import { useDispatch } from '../../services/hooks';
import { fetchGames } from '../../utils/fetchGames';
import Cards from '../Cards/Cards';

import styles from './App.module.scss'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch])

  return <main className={styles.pages}><Cards /></main>;
}

export default App;
