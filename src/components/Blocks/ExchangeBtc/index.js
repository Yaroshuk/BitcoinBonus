import { Text, Flex, Box, Icon, Image, Button, Grid } from "@chakra-ui/react"
import React, { useState, useEffect, useCallback } from "react"
import { AiOutlineCheckCircle } from "react-icons/ai"
import ChatCard from "../../ChatCard"
import { useSelector } from "react-redux"
import { thousandsFormatter, usdToBtc, useGoTo } from "../../../utils"
import ExchangeBtcItem from "../../ExchangeBtcItem"
import { externalLink } from "../../../data"
import { COMMISSIONFP_PAGE, COMMISSION_PAGE } from "../../../constants"
import { useNavigate } from "react-router-dom"

const nextPath = `/${COMMISSION_PAGE}/${COMMISSIONFP_PAGE}`

const ExchangeBtc = () => {
  const balance = useSelector(state => state.user.balance)
  const rate = useSelector(state => state.user.rate)

  const btc = usdToBtc(balance, rate)

  const links = useSelector(state => state.data.links)
  const prices = useSelector(state => state.data.prices)

  const navigate = useNavigate()

  const onClick = useCallback(() => {
    const link = links?.[10]

    if (!link) return

    if (String(link).includes("http")) {
      window.open(link, "_self")
    } else {
      navigate(link)
    }
  }, [links?.[10]])

  return (
    <ChatCard position={"relative"} bodyStyles={{}}>
      <Box
        display={"grid"}
        gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={"30px"}
      >
        <Flex
          flexDir={"column"}
          alignItems={{ base: "center", md: "flex-start" }}
          gridColumn={{ base: "1", md: "2" }}
          justifyContent={{ md: "center" }}
        >
          <Box
            fontSize={{ base: "14px", sm: "18px" }}
            color={"#21D233"}
            background={"#E0F8E3"}
            p={"10px"}
            borderRadius={"4px"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={"10px"}
            width={"fit-content"}
            mb={"30px"}
          >
            <Icon as={AiOutlineCheckCircle} />
            Money successfully credited to Swift
          </Box>

          <Flex
            flexDir={{ base: "column", md: "row" }}
            alignItems={"center"}
            gap={{ md: "30px" }}
          >
            <Box textAlign={{ base: "center", md: "left" }}>
              <Text fontSize={{ base: "20px", md: "24px" }} fontWeight={"600"}>
                Your payout is:
              </Text>
              <Text
                fontSize={{ base: "40px", md: "40px" }}
                fontWeight={"bold"}
                color={"brand.600"}
              >{`$${thousandsFormatter(balance)}`}</Text>
            </Box>
            <Text
              color={"pink.100"}
              fontSize={{ base: "16px", md: "20px" }}
              textAlign={{ base: "center", md: "left" }}
              width={{ md: "40%" }}
            >
              You need to withdraw money within 24 hours!
            </Text>
          </Flex>
        </Flex>
        <Flex
          flexDir={"column"}
          justifyContent={{ md: "center" }}
          gridColumn={"1"}
          gridRow={"1"}
        >
          <Text fontSize={{ base: "30px", md: "36px" }} mb={"15px"}>
            You need to create an application to exchange BTC in USD
          </Text>
          <Text fontSize={{ base: "20px", md: "24px" }} mb={"15px"}>
            Your funds have been transferred to a cryptocurrency exchange
            Binance
          </Text>
          <Text
            fontSize={{ base: "20px", md: "24px" }}
            fontWeight={"700"}
            mb={"15px"}
            background={"linear-gradient(180deg, #7B2FD0 0%, #414DED 100%)"}
            sx={{
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            {`Currently on the stock exchange ${btc} BTC`}
          </Text>
        </Flex>
        <ExchangeBtcItem
          money={balance}
          btc={btc}
          gridColumn={{ base: "1", md: "1/span 2" }}
          price={prices?.[10]}
          onClick={onClick}
        />
      </Box>
    </ChatCard>
  )
}

export default ExchangeBtc
