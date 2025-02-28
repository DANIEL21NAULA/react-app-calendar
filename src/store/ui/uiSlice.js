import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isDateModalOpen: false,
  },
  reducers: {
    onOpenDateModal: (state/* , action */) => {
      // eslint-disable-next-line no-param-reassign
      state.isDateModalOpen = true;
    },
    onCloseDateModal: (state/* , action */) => {
      // eslint-disable-next-line no-param-reassign
      state.isDateModalOpen = false;
    },
  },
});

export const { onOpenDateModal, onCloseDateModal } = uiSlice.actions;
