import React, { useEffect } from "react"
import { Box, Text } from "@chakra-ui/react"
import { useSelector, useDispatch } from "react-redux"
import CustomCard from "../../CustomCard"
import ProgressBar from "../../ProgressBar"
import CollectorWindow from "../../CollectorWindow"

import {
  getRandomInt,
  getRandomString,
  thousandsFormatter,
  usdToBtc
} from "../../../utils"

import {
  addStep,
  addTransaction,
  setIsStarted,
  setIsFinished,
  addCollected,
  addConfirmed,
  addUnconfirmed
} from "../../../store/slices/collector"
import { setBalance } from "../../../store/slices/user"
import TotalCollected from "../TotalCollected"

let timer = null

const BonusesCollector = () => {
  const money = useSelector(state => state.user.balance)
  const rate = useSelector(state => state.user.rate)

  const btc = usdToBtc(money, rate)

  const dispatch = useDispatch()

  const transactions = useSelector(state => state.collector.transactions)
  const isStarted = useSelector(state => state.collector.isStarted)
  const isFinished = useSelector(state => state.collector.isFinished)
  const currentStep = useSelector(state => state.collector.currentStep)
  const maxStep = useSelector(state => state.collector.maxStep)

  const generateTransaction = () => {
    if (currentStep >= maxStep) {
      finish()

      clearTimeout(timer)
      return
    }

    const status = Math.random() > 0.3 && true

    const transaction = {
      wallet: getRandomString(),
      sumUsd: Number(`0.0${getRandomInt(6, 40)}`),
      status
    }

    transaction.sumBtc = usdToBtc(transaction.sumUsd, rate)

    dispatch(addTransaction(transaction))

    dispatch(setBalance(Number(money + transaction.sumUsd).toFixed(2)))

    dispatch(addCollected(+transaction.sumUsd))

    if (status) {
      dispatch(addStep())
      dispatch(addConfirmed())
    } else {
      dispatch(addUnconfirmed())
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
    return <TotalCollected />
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
      >{`Balance: ${btc}BTC  $${thousandsFormatter(money)}`}</Text>
      <Box>
        <ProgressBar value={(currentStep / maxStep) * 100} />
        <CollectorWindow transactions={transactions} />
        <Text
          color={"pink.100"}
          fontSize={{ base: "14px", sm: "18px" }}
          marginTop={"20px"}
        >
          *Usually the process of collecting bonuses takes 5-10 minutes
        </Text>
      </Box>
    </CustomCard>
  )
}

export default BonusesCollector
