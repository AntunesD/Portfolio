// store.js

import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './reducer/modalSlice';
import bulleReducer from './reducer/bulleSlice';
import themeReducer from './reducer/themeSlice';

const store = configureStore({
  reducer: {
    modal: modalReducer,
    bulle: bulleReducer,
    theme: themeReducer,
  },
});

export default store;
