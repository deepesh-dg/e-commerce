import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import cartSlice from './Cart';
import fetchCacheSlice from './fetchCacheSlice';

const store = configureStore({
	reducer: {
		fetchCache: fetchCacheSlice,
		cart: cartSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
