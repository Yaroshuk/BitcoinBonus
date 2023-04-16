import moment from "moment"
import { Text, Flex, Box, Icon, Image, Button } from "@chakra-ui/react"
import React, { useCallback } from "react"
import ChatCard from "../../components/ChatCard"
import { useSelector } from "react-redux"
import { thousandsFormatter, useGoTo } from "../../utils"
import FormCheckItem from "../../components/FormCheckItem"
import {
  COMMISSION_MANUAL_PAGE,
  COMMISSION_MOMENTUM_PAGE,
  COMMISSION_PAGE
} from "../../constants"
import TransactionsStatus from "../../components/TransactionStatus"
import ManagerStatus from "../../components/ManagerStatus"
import { useNavigate } from "react-router-dom"

const nextPage = `/${COMMISSION_PAGE}/${COMMISSION_MOMENTUM_PAGE}`
// 3-2
const Limitex = () => {
  const balance = useSelector(state => state.user.balance)

  const links = useSelector(state => state.data.links)

  const prices = useSelector(state => state.data.prices)
  // const goToNext = useGoTo()

  const navigate = useNavigate()

  const onClick = useCallback(() => {
    const link = links?.[32]

    if (!link) return

    if (String(link).includes("http")) {
      window.open(link, "_self")
    } else {
      navigate(link)
    }
  }, [links?.[32]])

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
            Exceeded the limit by the amount of the transfer
          </Text>
          <TransactionsStatus
            status={"Expects an increase in the limit!"}
            margin={{ base: "20px auto", md: "20px 0" }}
          />
          <Text
            fontSize={"16px"}
            display={{ base: "block", md: "none" }}
            mb={"20px"}
          >
            The money transter is rejected by the mass payments system. The
            limit is exceeded by the amount of the transfer. <br />
            <br /> To complete the transfer, increase your limit on cash
            transactions.
          </Text>
          <ManagerStatus margin={{ base: "25px auto", md: "25px 0" }} />
          <Box
            maxW={"100%"}
            padding={"15px"}
            border={"2px solid #FAFAFA"}
            bg={"#FAFAFA"}
            borderRadius={"sm"}
          >
            I made a request to the mass payment system. You have a standard
            &quot;Standard&quot;. There are no more translations ol{" "}
            <b>$5,000</b> per day. Therefore, the translation did not pass at
            once, it is still in processing. To complete the transfer and
            receive monev. Increase the limit ov the amount or the transter
            connecting the Maximum tariff. It costs only <b>${prices?.[32]}.</b>{" "}
            As soon as vou connect. thev will immediate v send vou monev.
          </Box>
        </Flex>
        <Flex flexDir={"column"} fontSize={"20px"}>
          <Text
            fontSize={"16px"}
            display={{ base: "none", md: "block" }}
            mb={"20px"}
          >
            The money transter is rejected by the mass payments system. The
            limit is exceeded by the amount of the transfer. <br />
            <br /> To complete the transfer, increase your limit on cash
            transactions.
          </Text>
          <Text fontSize={"20px"} mb={"30px"}>
            The cost of connecting the <b>&quot;Maximum&quot;</b> tariff:{" "}
            <b>${prices?.[32]}.</b>
          </Text>
          <Flex flexDir={"column"} gap={"10px"} justifyContent={"flex-start"}>
            <FormCheckItem
              checked={true}
              label={"Follow the instructions of vour personal manager."}
            />
            <FormCheckItem checked={true} label={"Get your funds."} />
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
          <Button
            mb={"10px"}
            mr={{ md: "40px" }}
            onClick={onClick}
            minW={"150px"}
          >
            Hire a manager
          </Button>
        </Flex>
      </Flex>
    </ChatCard>
  )
}

export default Limitex
