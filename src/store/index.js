import { configureStore } from '@reduxjs/toolkit'
import AutoCompleteReducer from '../pages/AutoComplete/AutoComplete.reducer'

const setupStore = () => {
  return configureStore({
    reducer: {
      autoComplete: AutoCompleteReducer,
    },
  })
}

export default setupStore
