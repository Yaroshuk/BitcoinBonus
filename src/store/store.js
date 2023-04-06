import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./slices/user"
import memberChatReducer from "./slices/memberChat"
import collector from "./slices/collector"

const store = configureStore({
  reducer: {
    user: userReducer,
    memberChat: memberChatReducer,
    collector: collector
  }
})

export default store
