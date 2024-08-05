import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';

const store = configureStore({
  reducer:{
    // login,
    // logout
  }
});

export default store;