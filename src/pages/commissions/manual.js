import moment from "moment"
import { Text, Flex, Box, Icon, Image, Button } from "@chakra-ui/react"
import React from "react"
import ChatCard from "../../components/ChatCard"
import { useSelector } from "react-redux"
import { thousandsFormatter, useGoTo } from "../../utils"
import FormCheckItem from "../../components/FormCheckItem"
import { COMMISSION_MANUAL_PAGE, COMMISSION_PAGE } from "../../constants"
import TransactionsStatus from "../../components/TransactionStatus"
import ManagerStatus from "../../components/ManagerStatus"

const nextPage = `/${COMMISSION_PAGE}/${COMMISSION_MANUAL_PAGE}`
// 3-1
const Manual = () => {
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
            Refusal to automatically send translation
          </Text>
          <TransactionsStatus
            margin={{ base: "20px auto 0", md: "20px 0 0" }}
          />
          <ManagerStatus margin={{ base: "25px auto", md: "25px 0" }} />
          <Text
            fontSize={"16px"}
            display={{ base: "block", md: "none" }}
            mb={"20px"}
          >
            Automatic sending of money is not supported by the payment system.
            <br />
            <br />
            Manual sending a money transfer to the account you specified is
            required.
          </Text>
          <Text fontSize={{ base: "20px", md: "20px" }}>
            Immediately after paying for the services of the manager, a money
            transfer in the amount of <b>${balance}</b> will be sent.
            <br />
            <br />
            The cost of the service of a personal manager in total: <b>$208.</b>
          </Text>
        </Flex>
        <Flex flexDir={"column"} fontSize={"20px"}>
          <Text
            fontSize={"16px"}
            display={{ base: "none", md: "block" }}
            mb={"30px"}
          >
            Automatic sending of money is not supported by the payment system.
            <br />
            <br />
            Manual sending a money transfer to the account you specified is
            required.
          </Text>
          <Flex flexDir={"column"} gap={"10px"} justifyContent={"flex-start"}>
            <FormCheckItem
              checked={true}
              label={"Hire a personal manager by paying for his services."}
            />
            <FormCheckItem
              checked={true}
              label={
                " Manager will contact you immediately after payment right on our website."
              }
            />
            <FormCheckItem
              checked={true}
              label={
                " You will receive your payment immediately in manual mode."
              }
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
            minW={"150px"}
          >
            Hire a manager
          </Button>
        </Flex>
      </Flex>
    </ChatCard>
  )
}

export default Manual
