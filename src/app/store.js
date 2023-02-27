import { configureStore } from '@reduxjs/toolkit';
import startViewSlice from '../features/startViewSlice'
import gameViewSlice from '../features/gameViewSlice'
import gameOverSlice from '../features/gameOverSlice'


const rootRuducer = {
  startView: startViewSlice,
  gameView: gameViewSlice,
  gameOverView: gameOverSlice
}

export const store = configureStore({
  reducer: rootRuducer
});


