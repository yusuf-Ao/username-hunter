import { configureStore } from '@reduxjs/toolkit'
import serviceReducer from './reducers/service.reducer'

export default configureStore({
  reducer: {
    service: serviceReducer,
  }
})