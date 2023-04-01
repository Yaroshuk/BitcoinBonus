import { createSlice } from "@reduxjs/toolkit"
import { storage } from "../../utils"

const initialState = {
  messages: storage.getChatInitialMessages(),
  writing: false,
  userMessage: ""
}

export const memberChatSlice = createSlice({
  name: "memberChat",
  initialState,
  reducers: {
    setMessages: (state, action) => {
      state.messages = action.payload
    },
    addMessage: (state, action) => {
      state.messages.push(action.payload)
    },
    setWriting: (state, action) => {
      state.writing = action.payload
    },
    setUserMessage: (state, action) => {
      state.userMessage = action.payload
    }
  }
})

export const { setMessages, addMessage, setWriting, setUserMessage } =
  memberChatSlice.actions

export default memberChatSlice.reducer
