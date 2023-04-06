import { createSlice } from "@reduxjs/toolkit"
import { storage } from "../../utils"
import { getCollectorInitialState } from "../../utils/storage"
import {
  COLLECTOR_TRANSACTIONS,
  COLLECTOR_CURRENT_STEP,
  COLLECTOR_STARTED,
  COLLECTOR_FINISHED
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
    }
  }
})

export const { setIsStarted, addStep, addTransaction, setIsFinished } =
  collectorSlice.actions

export default collectorSlice.reducer
