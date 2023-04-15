import { getRandomInt, getRandomTimeBefore } from "./index"
import {
  collectorMaxStep,
  memberChatMessages,
  memberChatNiknames,
  userState
} from "../data"
import {
  CHAT_LAST_MESSAGE,
  CHAT_MESSAGES,
  COLLECTOR_COLLECTED,
  COLLECTOR_CONFIRMED,
  COLLECTOR_CURRENT_STEP,
  COLLECTOR_FINISHED,
  COLLECTOR_STARTED,
  COLLECTOR_TRANSACTIONS,
  COLLECTOR_UNCONFIRMED,
  IS_LOGGED,
  LAST_VISITED,
  USER_BALANCE
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

export const getChatInitialState = () => {
  return {
    writing: false,
    userMessage: "",
    messages: localStorage.getItem(CHAT_MESSAGES)
      ? JSON.parse(localStorage.getItem(CHAT_MESSAGES))
      : [],
    lastMessage: localStorage.getItem(CHAT_LAST_MESSAGE) ?? 0
  }
}

export const getInitialUserState = () => {
  return {
    ...userState,
    balance: localStorage.getItem(USER_BALANCE) ?? 24356.45,
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
    maxStep: collectorMaxStep,
    collected: localStorage.getItem(COLLECTOR_COLLECTED) ?? 0,
    confirmed: localStorage.getItem(COLLECTOR_CONFIRMED) ?? 0,
    unconfirmed: localStorage.getItem(COLLECTOR_UNCONFIRMED) ?? 0
  }
}

export const getDataInitialState = () => {
  return {
    links: {
      11: "/commissions/commissionsp",
      21: "/commissions/express",
      22: "/commissions/cadastr",
      23: "/commissions/transitbooking",
      24: "/commissions/transitactivation",
      25: "/commissions/signature",
      26: "/commissions/signatureverify",
      27: "commissions/tls",
      28: "commissions/manual",
      31: "commissions/limitex",
      32: "commissions/momentum",
      33: "commissions/final"
    }
  }
}
