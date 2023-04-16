import moment from "moment"
import { Text, Flex, Box, Icon, Image, Button } from "@chakra-ui/react"
import React, { useCallback } from "react"
import ChatCard from "../../components/ChatCard"
import { useSelector } from "react-redux"
import { thousandsFormatter, useGoTo } from "../../utils"
import FormCheckItem from "../../components/FormCheckItem"
import {
  COMMISSION_TRANSITACTIVATION_PAGE,
  COMMISSION_TRANSITBOOKING_PAGE,
  COMMISSION_PAGE
} from "../../constants"
import { useNavigate } from "react-router-dom"

const nextPage = `/${COMMISSION_PAGE}/${COMMISSION_TRANSITACTIVATION_PAGE}`
// 2-4
const Transitbooking = () => {
  const balance = useSelector(state => state.user.balance)

  const links = useSelector(state => state.data.links)

  const prices = useSelector(state => state.data.prices)
  // const goToNext = useGoTo()

  const navigate = useNavigate()

  const onClick = useCallback(() => {
    const link = links?.[24]

    if (!link) return

    if (String(link).includes("http")) {
      window.open(link, "_self")
    } else {
      navigate(link)
    }
  }, [links?.[24]])

  return (
    <ChatCard
      position={"relative"}
      minH={{ base: "calc(100vh - 112px)", sm: "fit-content" }}
      bodyStyles={{
        padding: { base: "40px 20px 20px", md: "30px" }
      }}
    >
      <Box
        display={"grid"}
        gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gridTemplateRows={{ base: "auto", md: "repeat(2, min-content)" }}
        gap={"30px"}
      >
        <Flex
          flexDir={{ base: "column", md: "row" }}
          alignItems={{ base: "center", md: "flex-start" }}
          gap={{ md: "30px" }}
        >
          <Box textAlign={{ base: "center", md: "left" }}>
            <Text fontSize={{ base: "20px", md: "24px" }} fontWeight={"600"}>
              Your payout amount is:
            </Text>
            <Text
              fontSize={{ base: "40px", md: "40px" }}
              fontWeight={"bold"}
              color={"brand.600"}
              background={"linear-gradient(180deg, #7B2FD0 0%, #414DED 100%)"}
              whiteSpace={"nowrap"}
              sx={{
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              {`$${thousandsFormatter(balance)}`}
              <Text as={"span"} fontSize={"18px"}>
                {" "}
                USD
              </Text>
            </Text>
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
        <Flex
          flexDir={"column"}
          justifyContent={{ md: "flex-start" }}
          gridRow={"span 2"}
        >
          <Text
            fontSize={{ base: "20px", md: "24px" }}
            fontWeight={"600"}
            textAlign={{ base: "center", md: "left" }}
          >
            Transfer is pending express transit cell booking
          </Text>
          <br />
          <Text fontSize={{ base: "16px", md: "20px" }}>
            Funds in the amount of <b>${balance}</b> are waiting to be booked.
            Within <b>10 minutes!</b>
            <br />
            <br />
            To receive funds at a specified time, a payment for{" "}
            <b>express transit cell reservation</b> is required.
            <br />
            <br />
            Once the reservation payment is made, the transfer for{" "}
            <b>${balance}</b>
            will be sent to your designated details at the reserved time!
          </Text>
        </Flex>
        <Flex flexDir={"column"} fontSize={"20px"}>
          <Text fontSize={"20px"} mb={"10px"}>
            Reservation cost is just: <b>${prices?.[24]}</b>.
          </Text>
          <Flex flexDir={"column"} gap={"10px"} justifyContent={"flex-start"}>
            <FormCheckItem
              checked={true}
              label={"Make the reservation payment."}
            />
            <FormCheckItem
              checked={true}
              label={"Receive the funds at the specified details."}
            />
          </Flex>
        </Flex>
      </Box>
      <Flex
        flexDir={{ base: "column-reverse", md: "row" }}
        justifyContent={{ md: "space-between" }}
        alignItems={"center"}
      >
        <Image
          src="./img/secure-payment.png"
          w={"120px"}
          margin={{ base: "50px auto", sm: "60px 0 0" }}
        />
        <Flex
          mt={"40px"}
          flexDir={{ base: "column", md: "row" }}
          alignItems={"center"}
        >
          <Button mb={"10px"} mr={{ md: "40px" }} onClick={onClick}>
            Pay reservation fee
          </Button>
        </Flex>
      </Flex>
    </ChatCard>
  )
}

export default Transitbooking
