import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./slices/user"
import memberChatReducer from "./slices/memberChat"

const store = configureStore({
  reducer: {
    user: userReducer,
    memberChat: memberChatReducer
  }
})

export default store
