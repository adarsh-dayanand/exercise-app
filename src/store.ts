import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import exerciseReducer from './redux/exercises';
import bodypartReducer from './redux/bodypart';

export const store = configureStore({
  reducer: {
    exercises: exerciseReducer,
    bodypart: bodypartReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
