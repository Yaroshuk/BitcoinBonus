import { createSlice } from "@reduxjs/toolkit"
import { CHAT_LAST_MESSAGE, CHAT_MESSAGES } from "../../constants"
import { storage } from "../../utils"

const initialState = storage.getChatInitialState()

export const memberChatSlice = createSlice({
  name: "memberChat",
  initialState,
  reducers: {
    setMessages: (state, action) => {
      state.messages = action.payload
    },
    addMessage: (state, action) => {
      state.messages.push(action.payload)

      if (state.messages.length > 10) {
        state.messages.shift()
      }

      localStorage.setItem(CHAT_MESSAGES, JSON.stringify(state.messages))
    },
    setWriting: (state, action) => {
      state.writing = action.payload
    },
    setUserMessage: (state, action) => {
      state.userMessage = action.payload
    },
    setLastMessage: (state, action) => {
      state.lastMessage = +action.payload

      localStorage.setItem(CHAT_LAST_MESSAGE, action.payload)
    }
  }
})

export const {
  setMessages,
  addMessage,
  setWriting,
  setUserMessage,
  setLastMessage
} = memberChatSlice.actions

export default memberChatSlice.reducer
