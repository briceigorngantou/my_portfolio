/* eslint-disable object-curly-newline */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: 'light'
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setMode: (state: any) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    }
  }
});

export const { setMode } = authSlice.actions;
export default authSlice.reducer;
