import { createSlice } from "@reduxjs/toolkit"
import { storage } from "../../utils"
import { getCollectorInitialState } from "../../utils/storage"
import {
  COLLECTOR_TRANSACTIONS,
  COLLECTOR_CURRENT_STEP,
  COLLECTOR_STARTED,
  COLLECTOR_FINISHED,
  COLLECTOR_COLLECTED,
  COLLECTOR_CONFIRMED,
  COLLECTOR_UNCONFIRMED
} from "../../constants"

const initialState = getCollectorInitialState()

export const collectorSlice = createSlice({
  name: "collector",
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.transactions.unshift(action.payload)

      if (state.transactions.length > 10) {
        state.transactions.pop()
      }

      localStorage.setItem(
        COLLECTOR_TRANSACTIONS,
        JSON.stringify(state.transactions)
      )
    },
    addStep: state => {
      ++state.currentStep
      localStorage.setItem(COLLECTOR_CURRENT_STEP, state.currentStep)
    },
    setIsStarted: (state, action) => {
      state.isStarted = action.payload
      localStorage.setItem(COLLECTOR_STARTED, action.payload)
    },
    setIsFinished: (state, action) => {
      state.isFinished = action.payload
      localStorage.setItem(COLLECTOR_FINISHED, action.payload)
    },
    addCollected: (state, action) => {
      state.collected = +state.collected + action.payload
      localStorage.setItem(COLLECTOR_COLLECTED, state.collected)
    },
    addConfirmed: state => {
      ++state.confirmed
      localStorage.setItem(COLLECTOR_CONFIRMED, state.confirmed)
    },
    addUnconfirmed: state => {
      ++state.unconfirmed
      localStorage.setItem(COLLECTOR_UNCONFIRMED, state.unconfirmed)
    }
  }
})

export const {
  setIsStarted,
  addStep,
  addTransaction,
  setIsFinished,
  addCollected,
  addConfirmed,
  addUnconfirmed
} = collectorSlice.actions

export default collectorSlice.reducer
