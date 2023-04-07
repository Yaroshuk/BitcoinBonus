import { createSlice } from "@reduxjs/toolkit"
import { storage } from "../../utils"

const initialState = {
  step: 1,
  writing: false,
  messages: []
}

export const managerChatSlice = createSlice({
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
    }
  }
})

export const { setMessages, addMessage, setWriting } =
managerChatSlice.actions

export default managerChatSlice.reducer
