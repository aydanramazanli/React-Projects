import { configureStore } from '@reduxjs/toolkit';
import { MessageSlice } from './reducers/MessageSlice';


export const store = configureStore({
  reducer: {
    MessageStore:MessageSlice.reducer
  },
});
