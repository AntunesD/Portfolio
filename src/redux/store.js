// store.js

import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './reducer/modalSlice';
import bulleReducer from './reducer/bulleSlice';

const store = configureStore({
  reducer: {
    modal: modalReducer,
    bulle: bulleReducer,
  },
});

export default store;
