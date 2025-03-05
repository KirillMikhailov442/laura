import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profile: false,
  menu: false,
  user: false,
  roomInfo: false,
};

type PayloadKeys = keyof typeof initialState;

interface PayloadType {
  key: PayloadKeys;
  isCloseAllModal?: boolean;
}

const ModalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    openModal: (state, { payload }: { payload: PayloadType }) => {
      if (payload.isCloseAllModal == undefined) payload.isCloseAllModal = true;

      if (payload.isCloseAllModal) {
        for (const key in state) {
          state[key as PayloadKeys] = false;
        }
      }
      state[payload.key] = true;
    },

    closeModal: (state, { payload }: { payload: PayloadType }) => {
      state[payload.key] = false;
    },

    toggleModal: (state, { payload }: { payload: PayloadType }) => {
      state[payload.key] = !state[payload.key];
    },

    closeAllModal: state => {
      for (const key in state) {
        state[key as PayloadKeys] = false;
      }
    },
  },
});

export default ModalsSlice.reducer;

export const { openModal, closeModal, toggleModal } = ModalsSlice.actions;
