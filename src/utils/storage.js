import { getRandomInt, getRandomTimeBefore } from "./index"
import { memberChatMessages, memberChatNiknames, userState } from "../data"

export const getChatInitialMessages = () => {
  return [
    {
      text: memberChatMessages[getRandomInt(0, memberChatMessages.length)],
      author: memberChatNiknames[getRandomInt(0, memberChatNiknames.length)],
      time: getRandomTimeBefore(2, 5).format("HH:MM")
    }
  ]
}

export const getInitialUserState = () => {
  return {
    ...userState,
    isLogged: false
  }
}
