import { createSlice } from "@reduxjs/toolkit"
import { getInitialUserState } from "../../utils/storage"

const initialState = getInitialUserState()

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.login = action.payload
    },
    setPassword: (state, action) => {
      state.password = action.payload
    },
    setBalance: (state, action) => {
      state.balance = action.payload
    },
    addBalance: (state, action) => {
      state.balance += action.payload
    },
    setIsLogged: (state, action) => {
      state.isLogged = action.payload
    }
  }
})

export const { setLogin, setPassword, setBalance, setIsLogged, addBalance } =
  userSlice.actions

export default userSlice.reducer
