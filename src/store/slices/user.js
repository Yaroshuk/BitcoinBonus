import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  login: "user-1123454",
  password: "p34kjhjy!ee5",
  isLogged: false,
  balance: 234562
}

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
    setIsLogged: (state, action) => {
      state.isLogged = action.payload
    }
  }
})

export const { setLogin, setPassword, setBalance, setIsLogged } =
  userSlice.actions

export default userSlice.reducer
