import React, { useCallback } from "react"
import { Box, Button, Text } from "@chakra-ui/react"
import { useSelector, useDispatch } from "react-redux"
import CustomCard from "../../CustomCard"
import { usdToBtc } from "../../../utils"
import { useNavigate } from "react-router-dom"
import { CHAT_PAGE, LAST_VISITED } from "../../../constants"
import { setMessages } from "../../../store/slices/managerChat"

const TotalCollected = () => {
  const navigate = useNavigate()
  const money = useSelector(state => state.user.balance)
  const rate = useSelector(state => state.user.rate)

  const dispatch = useDispatch()

  const collected = useSelector(state => state.collector.collected)
  const confirmed = useSelector(state => state.collector.confirmed)
  const unconfirmed = useSelector(state => state.collector.unconfirmed)

  const btc = usdToBtc(collected, rate)

  const handleGoChat = useCallback(() => {
    navigate("/chat")
    dispatch(setMessages([]))
    localStorage.setItem(LAST_VISITED, CHAT_PAGE)
  }, [navigate])

  return (
    <CustomCard
      title={"You've collected"}
      rightBlock={
        <Text
          gap={"8px"}
          color={"#D3C2E9"}
          fontSize={"20px"}
          fontWeight={"semibold"}
          alignItems={"center"}
        >
          {`${btc} BTC`}
        </Text>
      }
    >
      <Box display={"flex"} flexDir={"column"} alignItems={"center"}>
        <Box textAlign={"center"}>
          <Text color={"pink.100"} fontSize={"20px"} fontWeight={"semibold"}>
            Current Balance:
          </Text>
          <Text color={"brand.500"} fontSize={"24px"} fontWeight={"bold"}>
            {`${btc} BTC = ${money} USD`}
          </Text>
        </Box>
        <Box
          textAlign={"center"}
          mt={"20px"}
          display={"flex"}
          flexDir={"column"}
          gap={"15px"}
        >
          <Text color={"pink.100"} fontSize={"20px"} fontWeight={"semibold"}>
            Statistics:
          </Text>
          <Text color={"brand.500"} fontSize={"24px"} fontWeight={"bold"}>
            {`Total collected: ${Number(collected).toFixed(3)}$`}
          </Text>
          <Text color={"#21D233"} fontSize={"24px"} fontWeight={"bold"}>
            {`Confirmed: ${confirmed}`}
          </Text>
          <Text color={"#EF4242"} fontSize={"24px"} fontWeight={"bold"}>
            {`Unconfirmed: ${unconfirmed}`}
          </Text>
        </Box>
        <Button minWidth={"200px"} marginTop={"60px"} onClick={handleGoChat}>
          Get Paid
        </Button>
      </Box>
      <Text
        color={"pink.100"}
        fontSize={{ base: "14px", sm: "18px" }}
        marginTop={"40px"}
      >
        Recommendation: Act now and request your payout. The current Bitcoin
        exchange rate has increased by an impressive 1457% yield.
      </Text>
    </CustomCard>
  )
}

export default TotalCollected
