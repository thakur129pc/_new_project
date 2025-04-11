import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  challange: string | null;
}

const initialState: AuthState = {
  challange: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setChallange: (state, action: PayloadAction<string>) => {
      state.challange = action.payload;
    },
    clearChallange: (state) => {
      state.challange = null;
    },
  },
});

export const { setChallange, clearChallange } = authSlice.actions;
export default authSlice.reducer;
