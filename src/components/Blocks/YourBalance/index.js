import React from "react"
import { Box, Text } from "@chakra-ui/react"
import Timeline from "../../Timeline"
import BalanceChart from "../../BalanceChart"

const YourBalance = () => {
  const balance = "24 281,80" // TODO: implement
  // TODO: current time!!!
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"flex-end"}
      alignItems={"center"}
      minH={"328px"}
      pb={"24px"}
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
        <Text color={"#D3C2E9"} fontSize={"lg"} fontWeight={"semibold"}>
          Your balance
        </Text>
        <Text
          color={"black"}
          fontSize={"2xl"}
          fontWeight={"semibold"}
        >{`$ ${balance}`}</Text>
      </Box>
      <BalanceChart balance={balance} />
      <Timeline points={["01:00", "06:00", "11:00"]} maxW={"300px"} />
      {/* GRADIENT */}
      <Box
        position={"absolute"}
        h={"100%"}
        w={"84px"}
        left={"0"}
        top={"0"}
        background={
          "linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);"
        }
        borderRadius={"lg"}
      ></Box>
    </Box>
  )
}

export default YourBalance
