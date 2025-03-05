import { configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { calendarSlice, uiSlice } from '.';

export const store = configureStore({
  reducer: {
    calendar: calendarSlice.reducer,
    ui: uiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});
