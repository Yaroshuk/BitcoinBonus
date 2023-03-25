import { Box, Fade, Slide, keyframes } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import { useTimer } from "react-timer-hook"
import { motion } from "framer-motion"

const Countdown = ({ timestamp }) => {
  // TODO: add animation
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp: timestamp
  })

  // useEffect(() => {
  //   setCurrentSecs(state => {
  //     console.log("111", state)
  //     const currentState = [...state]

  //     if (currentState.length > 2) {
  //       currentState.shift()
  //     }

  //     return [...currentState, seconds]
  //   })
  // }, [seconds])

  return (
    <Box
      fontSize={"40px"}
      fontWeight={"black"}
      display={"flex"}
      position={"relative"}
    >
      <Box>{days}</Box>
      {":"}
      <Box>{hours}</Box>
      {":"}
      <Box>{minutes}</Box>
      {":"}
      <Box>{seconds}</Box>
    </Box>
  )
}

export default Countdown
