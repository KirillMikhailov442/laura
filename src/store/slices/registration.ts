import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  stepNumber: 1,
};

const Registration = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    nextStep: state => {
      state.stepNumber += 1;
    },
    prevStep: state => {
      state.stepNumber -= 1;
    },
  },
});

export default Registration.reducer;

export const { nextStep, prevStep } = Registration.actions;
