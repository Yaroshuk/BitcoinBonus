import { getRandomInt, getRandomTimeBefore } from "./index"
import { memberChatMessages, memberChatNiknames, userState } from "../data"
import { IS_LOGGED, LAST_VISITED } from "../constants"

export const getChatInitialMessages = () => {
  return [
    {
      text: memberChatMessages[getRandomInt(0, memberChatMessages.length)],
      author: memberChatNiknames[getRandomInt(0, memberChatNiknames.length)],
      time: getRandomTimeBefore(2, 5).format("HH:mm")
    }
  ]
}

export const getInitialUserState = () => {
  return {
    ...userState,
    isLogged: localStorage.getItem(IS_LOGGED)
  }
}
