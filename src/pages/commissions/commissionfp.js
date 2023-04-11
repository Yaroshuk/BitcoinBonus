import moment from "moment"
import { Text, Flex, Box, Icon, Image, Button } from "@chakra-ui/react"
import React, { useState, useEffect, useCallback } from "react"
import { useTimer } from "react-timer-hook"
import ChatCard from "../../components/ChatCard"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai"
import { thousandsFormatter } from "../../utils"
import FillForm from "../../components/Blocks/FillForm"
import FormCheckItem from "../../components/FormCheckItem"
import { CHAT_LAST_PAGE, LAST_VISITED } from "../../constants"

// 2-1
const Commissionfp = () => {
  const [iName, setIName] = useState("")
  const [iEmail, setIEmail] = useState("")
  const [iSelect, setISelect] = useState("Bank account")
  const [iWallet, setIWallet] = useState("")

  const balance = useSelector(state => state.user.balance)

  const navigate = useNavigate()

  const handleSubmit = useCallback(() => {
    navigate("/charlast")
    localStorage.setItem(LAST_VISITED, CHAT_LAST_PAGE)
  }, [navigate])

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

  const onSelectChange = useCallback(
    event => {
      setISelect(event.target.value)
    },
    [setIName]
  )

  const onWalletChange = useCallback(
    event => {
      setIWallet(event.target.value)
    },
    [setIName]
  )

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
          gridColumn={{ md: "2" }}
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
        <FillForm
          nameValue={iName}
          emailValue={iEmail}
          selectValue={iSelect}
          walletValue={iWallet}
          onNameChange={onNameChange}
          onEmailChange={onEmailChange}
          onSelectChange={onSelectChange}
          onWalletChange={onWalletChange}
          gridColumn={{ md: "1" }}
          gridRow={{ md: "1/span 2" }}
        />
        <Flex flexDir={"column"} justifyContent={{ md: "center" }}>
          <Text fontSize={{ base: "20px", md: "24px" }} mb={"15px"}>
            Specify the details, to which you want to funds
          </Text>
          <Flex flexDir={"column"} gap={"10px"} justifyContent={"flex-start"}>
            <FormCheckItem checked={!!iName} label={"Enter your full name"} />
            <FormCheckItem checked={!!iEmail} label={"Email adress"} />
            <FormCheckItem
              checked={!!iWallet}
              label={"Enter your account or card number"}
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
          <Button
            isDisabled={!iName || !iEmail || !iSelect || !iWallet}
            width={{ base: "190px", md: "230px" }}
            mb={"10px"}
            mr={{ md: "40px" }}
            onClick={handleSubmit}
          >
            SEND
          </Button>
          <Text fontSize={"18px"} fontWeight={"700"} opacity={"0.3"}>
            a questionnaire <br />
            to the manager
          </Text>
        </Flex>
      </Flex>
    </ChatCard>
  )
}

export default Commissionfp
