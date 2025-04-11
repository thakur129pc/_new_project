import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  challange: string | null;
  session: string | null;
}

const initialState: AuthState = {
  challange: null,
  session: null,
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
    setSession: (state, action: PayloadAction<string>) => {
      state.session = action.payload;
    },
    clearSession: (state) => {
      state.session = null;
    },
  },
});

export const { setChallange, clearChallange, setSession, clearSession } = authSlice.actions;
export default authSlice.reducer;
