import { configureStore } from '@reduxjs/toolkit';
import pizzas from './slices/pizzas';

const store = configureStore({
  reducer: {
    pizzas
  }
})

export type AppStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;

export default store;