import { createSlice } from "@reduxjs/toolkit"
import { USER_BALANCE } from "../../constants"
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
      console.log(";;;;;", action.payload, state.balance)
      localStorage.setItem(USER_BALANCE, state.balance)
    },
    addBalance: (state, action) => {
      state.balance += action.payload
      localStorage.setItem(USER_BALANCE, state.balance)
    },
    setIsLogged: (state, action) => {
      state.isLogged = action.payload
    }
  }
})

export const { setLogin, setPassword, setBalance, setIsLogged, addBalance } =
  userSlice.actions

export default userSlice.reducer
