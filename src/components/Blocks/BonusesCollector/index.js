import React, { useEffect } from "react"
import { Box, Text } from "@chakra-ui/react"
import { useSelector, useDispatch } from "react-redux"
import CustomCard from "../../CustomCard"
import ProgressBar from "../../ProgressBar"
import CollectorWindow from "../../CollectorWindow"

import { getRandomInt, getRandomString } from "../../../utils"

import {
  addStep,
  addTransaction,
  setIsStarted,
  setIsFinished
} from "../../../store/slices/collector"

let timer = null

const BonusesCollector = () => {
  const btc = "0,00133"
  const money = "24 284" // TODO: get data from store
  const dispatch = useDispatch()

  const transactions = useSelector(state => state.collector.transactions)
  const isStarted = useSelector(state => state.collector.isStarted)
  const isFinished = useSelector(state => state.collector.isFinished)
  const currentStep = useSelector(state => state.collector.currentStep)
  const maxStep = useSelector(state => state.collector.maxStep)

  const generateTransaction = () => {
    console.log("1111", currentStep, maxStep)
    if (currentStep >= maxStep) {
      finish()

      clearTimeout(timer)
      return
    }

    const status = Math.random() > 0.3 && true

    const transaction = {
      wallet: getRandomString(),
      sumBtc: `0.00000${getRandomInt(2, 5)}`, // TODO: count this
      sumUsd: Number(`0.0${getRandomInt(6, 15)}`),
      status
    }

    dispatch(addTransaction(transaction))

    if (status) {
      dispatch(addStep())
    }
  }

  const startTimer = () => {
    timer = setTimeout(() => {
      generateTransaction()
      startTimer()
    }, getRandomInt(1, 2) * 100)
  }

  const finish = () => {
    dispatch(setIsFinished(true))
    dispatch(setIsStarted(false))

    if (timer) {
      clearTimeout(timer)
    }
  }

  useEffect(() => {
    if (!isFinished && !isStarted) {
      dispatch(setIsStarted(true))
    }
  }, [isFinished, isStarted])

  useEffect(() => {
    if (currentStep >= maxStep) {
      finish()
    }
  }, [currentStep, maxStep])

  useEffect(() => {
    if (isStarted && !timer) {
      startTimer()
    }
  }, [isStarted])

  if (isFinished) {
    return <Text>FINISHED</Text>
  }

  return (
    <CustomCard
      title={"Collect your bonus"}
      rightBlock={
        <Text
          fontSize={{ base: "16px", sm: "24px" }}
          fontWeight={"normal"}
          color={"pink.100"}
        >
          Please wait ...
        </Text>
      }
      bodyPadding={"0 20px 20px"}
    >
      <Text
        fontSize={{ base: "16px", sm: "32px" }}
        fontWeight={"semibold"}
        color={"pink.100"}
      >{`Balance: ${btc}BTC  $${money}`}</Text>
      <Box>
        <ProgressBar value={(currentStep / maxStep) * 100} />
        <CollectorWindow transactions={transactions} />
        <Text color={"pink.100"} fontSize={{ base: "14px", sm: "18px" }}>
          *Usually the process of collecting bonuses takes 5-10 minutes
        </Text>
      </Box>
    </CustomCard>
  )
}

export default BonusesCollector
