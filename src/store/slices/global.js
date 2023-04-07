import { createSlice } from "@reduxjs/toolkit"
import { getInitialUserState } from "../../utils/storage"

const initialState = {
  isLoading: false
}

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload
    }
  }
})

export const { setLoading } = globalSlice.actions

export default globalSlice.reducer
