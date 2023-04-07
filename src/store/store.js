import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./slices/user"
import memberChatReducer from "./slices/memberChat"
import collector from "./slices/collector"
import managerChat from "./slices/managerChat"

const store = configureStore({
  reducer: {
    user: userReducer,
    memberChat: memberChatReducer,
    collector: collector,
    managerChat: managerChat
  }
})

export default store
