import React from "react"
import { Box, Text } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import Timeline from "../../Timeline"
import BalanceChart from "../../BalanceChart"
import moment from "moment"
import { thousandsFormatter } from "../../../utils"

const YourBalance = () => {
  const balance = useSelector(state => state.user.balance)
  const timeFormat = "HH:00"
  const time = moment()

  const times = [
    time.clone().subtract(6, "hours").format(timeFormat),
    time.clone().format(timeFormat),
    time.clone().add(6, "hours").format(timeFormat)
  ]

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
        >{`$ ${thousandsFormatter(balance)}`}</Text>
      </Box>
      <BalanceChart balance={balance} />
      <Timeline points={times} maxW={"300px"} />
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
