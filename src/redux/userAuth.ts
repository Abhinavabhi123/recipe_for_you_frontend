import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  _id: string;
  email: string;
  userName: string;
  image: string;
}

export type Args = {
  userName: string;
  email: string;
  _id: string;
  image: string;
};

const initialState: UserState = {
  _id: "",
  email: "",
  userName: "",
  image: "",
};

const userAuth = createSlice({
  name: "user",
  initialState,
  reducers: {
    userAddDetails(state, actions: PayloadAction<Args>) {
      const newItem = actions.payload;
      state._id = newItem._id;
      state.userName = newItem.userName;
      state.email = newItem.email;
      state.image = newItem.image;
    },
    userLogout(state, actions) {
      const newItem = actions.payload;
      state.userName = newItem.userName;
      state.email = newItem.email;
    },
  },
});

export const userActions = userAuth.actions;
export default userAuth.reducer;
