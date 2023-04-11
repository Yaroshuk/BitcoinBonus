import moment from "moment"
import { Text, Flex, Box, Icon, Image, Button } from "@chakra-ui/react"
import React from "react"
import ChatCard from "../../components/ChatCard"
import { useSelector } from "react-redux"
import { thousandsFormatter, useGoTo } from "../../utils"
import FormCheckItem from "../../components/FormCheckItem"
import { COMMISSION_PAGE, COMMISSIONSP_PAGE } from "../../constants"

const nextPage = `/${COMMISSION_PAGE}/${COMMISSIONSP_PAGE}`
// 2-1
const Commissionsp = () => {
  const balance = useSelector(state => state.user.balance)

  const goToNext = useGoTo()

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
          justifyContent={{ md: "space-between" }}
          gridRow={"span 2"}
        >
          <Text
            fontSize={{ base: "20px", md: "24px" }}
            fontWeight={"600"}
            textAlign={{ base: "center", md: "left" }}
          >
            Second transfer commission is requested by the payment system.
          </Text>
          <br />
          <Text fontSize={{ base: "16px", md: "20px" }}>
            The first transfer is marked as <b>paid</b> in the amount of{" "}
            <b>$15104</b>.
            <br />
            <br />
            Second transfer commission must be paid before first transfer can be
            sent.
            <br />
            <br />
            Both transfers will be sent to your specified details after the
            second transfer <b>commission is paid</b>.
          </Text>
        </Flex>
        <Flex flexDir={"column"} fontSize={"20px"}>
          <Text fontSize={"20px"} mb={"10px"}>
            Payment divided into two parts, second transfer is for <b>$15104</b>{" "}
            with acommission fee of <b>$48</b>.
          </Text>
          <Flex flexDir={"column"} gap={"10px"} justifyContent={"flex-start"}>
            <FormCheckItem checked={true} label={"Guaranteed fast payment."} />
            <FormCheckItem
              checked={true}
              label={" Pay the second transfer fee to receive the full amount."}
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
            onClick={() => goToNext(nextPage)}
          >
            Make payment for the second transfer&apos;s fee
          </Button>
        </Flex>
      </Flex>
    </ChatCard>
  )
}

export default Commissionsp
