import { createSlice } from "@reduxjs/toolkit"
import { getDataInitialState, getInitialUserState } from "../../utils/storage"

const initialState = getDataInitialState()

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.links = action.payload?.links && action.payload?.links
      state.prices = action.payload?.prices && action.payload?.prices
    }
  }
})

export const { setData } = dataSlice.actions

export default dataSlice.reducer
