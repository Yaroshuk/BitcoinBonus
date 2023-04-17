import { createSlice } from "@reduxjs/toolkit"
import { getInitialUserState } from "../../utils/storage"

const initialState = {
  isSearching: false
}

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isSearching = action.payload
    }
  }
})

export const { setLoading } = globalSlice.actions

export default globalSlice.reducer
