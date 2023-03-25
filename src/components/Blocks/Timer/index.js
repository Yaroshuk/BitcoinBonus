import React from "react"
import { Box, Text } from "@chakra-ui/react"

import Countdown from "../../Countdown"

const Timer = () => {
  const balance = "24 281,80"
  const today = new Date()
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)
  // const date = new Date().setDate(new Date() + 1).toString()

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      minH={"328px"}
      py={"24px"}
      position={"relative"}
      width={"100%"}
      background={"white"}
      borderRadius={"lg"}
    >
      <Box
        position={"absolute"}
        top={"40px"}
        left={"0"}
        right={"0"}
        textAlign={"center"}
      >
        <Text color={"#D3C2E9"} fontSize={"md"} fontWeight={"normal"}>
          Your account will be <br /> deleted after
        </Text>
      </Box>
      <Countdown timestamp={tomorrow} />
      <Box
        position={"absolute"}
        bottom={"40px"}
        left={"0"}
        right={"0"}
        textAlign={"center"}
      >
        <Text color={"#D3C2E9"} fontSize={"md"} fontWeight={"normal"}>
          Complete a couple of steps to collect <br /> your savings
        </Text>
      </Box>
    </Box>
  )
}

export default Timer
