import { getRandomInt, getRandomTimeBefore } from "./index"
import {
  collectorMaxStep,
  memberChatMessages,
  memberChatNiknames,
  userState
} from "../data"
import {
  COLLECTOR_CURRENT_STEP,
  COLLECTOR_FINISHED,
  COLLECTOR_STARTED,
  COLLECTOR_TRANSACTIONS,
  IS_LOGGED,
  LAST_VISITED
} from "../constants"
import { json } from "react-router-dom"

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

export const getCollectorInitialState = () => {
  return {
    isStarted: localStorage.getItem(COLLECTOR_STARTED) ?? false,
    isFinished: localStorage.getItem(COLLECTOR_FINISHED) ?? false,
    currentStep: localStorage.getItem(COLLECTOR_CURRENT_STEP) ?? 0,
    transactions: localStorage.getItem(COLLECTOR_TRANSACTIONS)
      ? JSON.parse(localStorage.getItem(COLLECTOR_TRANSACTIONS))
      : [],
    maxStep: collectorMaxStep
  }
}
