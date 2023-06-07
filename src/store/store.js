import { createStore } from 'redux'
import { authSlice } from './auth'
import rootReducer from './rootReducer'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: rootReducer,
})

export default store