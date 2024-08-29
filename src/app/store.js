import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './features/counter/counterSlice';
import { api } from '../services/pokemon';

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});