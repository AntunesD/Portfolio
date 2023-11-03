// modalSlice.js

import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
    title: '',
    imgTitle: '',
    outil: '',
    gitHub:'',
    gitPage:''
  },
  reducers: {
    openModal: (state, action) => {
        state.title = action.payload.title;
        state.imgTitle = action.payload.imgTitle;
        state.outil = action.payload.outil;
        state.gitHub = action.payload.gitHub;
        state.gitPage = action.payload.gitPage;
        state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.title = '';
      state.imgTitle = '';
      state.outil = '';
      state.gitHub = '';
      state.gitPage = '';
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
