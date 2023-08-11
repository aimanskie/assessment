import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  suggestion: '',
  address: 'Kuala Lumpur',
  listPlaces: [],
  coord: {
    lat: 3.140853,
    lng: 101.693207,
  },
  showHistory: false,
}

export const AutoCompleteSlice = createSlice({
  name: 'autoComplete',
  initialState,
  reducers: {
    setSuggestion: (state, action) => {
      state.suggestion = action.payload
    },
    setAddress: (state, action) => {
      state.address = action.payload
    },
    setListPlaces: (state, action) => {
      state.listPlaces.push(action.payload)
    },
    setCoord: (state, action) => {
      state.coord = action.payload
    },
    setShowHistory: (state) => {
      state.showHistory = !state.showHistory
    },
  },
})

export const { setSuggestion, setAddress, setListPlaces, setCoord, setShowHistory } = AutoCompleteSlice.actions
export default AutoCompleteSlice.reducer
