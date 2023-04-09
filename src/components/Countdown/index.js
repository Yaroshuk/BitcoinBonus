import { Box } from "@chakra-ui/react"
import React from "react"
import { useTimer } from "react-timer-hook"

const Countdown = ({ timestamp }) => {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp: timestamp
  })

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
