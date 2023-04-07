import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./slices/user"
import memberChatReducer from "./slices/memberChat"
import collector from "./slices/collector"
import managerChat from "./slices/managerChat"
import global from "./slices/global"

const store = configureStore({
  reducer: {
    user: userReducer,
    memberChat: memberChatReducer,
    collector: collector,
    managerChat: managerChat,
    global: global
  }
})

export default store
