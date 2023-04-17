import { createSlice } from "@reduxjs/toolkit"
import { getInitialUserState } from "../../utils/storage"

const initialState = {
  isSearching: false,
  isLoading: false
}

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setSearching: (state, action) => {
      state.isSearching = action.payload
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload
    }
  }
})

export const { setSearching, setLoading } = globalSlice.actions

export default globalSlice.reducer
