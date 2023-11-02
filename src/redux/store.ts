import { configureStore } from '@reduxjs/toolkit';
import userAuth from "./userAuth";


const store = configureStore({
    reducer: userAuth,
  });
  
  export default store;