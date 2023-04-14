import moment from "moment"
import { Text, Flex, Box, Icon, Image, Button } from "@chakra-ui/react"
import React from "react"
import ChatCard from "../../components/ChatCard"
import { useSelector } from "react-redux"
import { thousandsFormatter, useGoTo } from "../../utils"
import FormCheckItem from "../../components/FormCheckItem"
import { COMMISSION_FINAL_PAGE, COMMISSION_PAGE } from "../../constants"
import TransactionsStatus from "../../components/TransactionStatus"
import ManagerStatus from "../../components/ManagerStatus"

const nextPage = `/${COMMISSION_PAGE}/${COMMISSION_FINAL_PAGE}`
// 3-3
const Momentum = () => {
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
          justifyContent={{ md: "flex-start" }}
          gridRow={"span 2"}
        >
          <Text
            fontSize={{ base: "20px", md: "24px" }}
            fontWeight={"600"}
            textAlign={{ base: "center", md: "left" }}
          >
            Expect the transfer
          </Text>
          <TransactionsStatus
            status={"The application is issued"}
            margin={{ base: "20px auto", md: "20px 0" }}
          />
          <Text
            fontSize={"16px"}
            display={{ base: "block", md: "none" }}
            mb={"20px"}
          >
            The application for the transfer is executed. Transfers exceeding
            the <b>$10,000</b> are received within 30 business days. Expect the
            receipt of funds.
          </Text>
          <ManagerStatus margin={{ base: "25px auto", md: "25px 0" }} />
          <Box
            maxW={"100%"}
            padding={"15px"}
            border={"2px solid #FAFAFA"}
            bg={"#FAFAFA"}
            borderRadius={"sm"}
          >
            Of course, it&apos;s not convenient to wait so long. But such
            conditions for the mass payments to which we are connected. Usually
            our users do not wait but connect the{" "}
            <b>&quot;instant translation&quot;</b> and immediately receive
            money. It costs <b>$269,3.</b> If you also want to get a transfer
            instantly, I recommend connecting this service and vou will
            Immediately arrive money.
          </Box>
        </Flex>
        <Flex flexDir={"column"} fontSize={"20px"}>
          <Text
            fontSize={"16px"}
            display={{ base: "none", md: "block" }}
            mb={"20px"}
          >
            The application for the transfer is executed. Transfers exceeding
            the <b>$10,000</b> are received within 30 business days. Expect the
            receipt of funds.
          </Text>
          <Text fontSize={"20px"} mb={"30px"}>
            The cost of the service <b>&quot;Instant Transaction&quot;</b> of
            total: <b>$269.</b>
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
            onClick={() => goToNext(nextPage)}
            minW={"150px"}
          >
            Instant Transaction
          </Button>
        </Flex>
      </Flex>
    </ChatCard>
  )
}

export default Momentum
