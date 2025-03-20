import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
    project: null, // Stocke directement l'objet projet
  },
  reducers: {
    openModal: (state, action) => {
      state.project = action.payload.project; // Stocke l'objet entier
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.project = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
