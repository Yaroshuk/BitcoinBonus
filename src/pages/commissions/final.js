import moment from "moment"
import { Text, Flex, Box, Icon, Image, Button } from "@chakra-ui/react"
import React from "react"
import ChatCard from "../../components/ChatCard"
import { useSelector } from "react-redux"
import { thousandsFormatter, useGoTo, useLoading } from "../../utils"
import FormCheckItem from "../../components/FormCheckItem"
import { COMMISSION_FINAL_PAGE, COMMISSION_PAGE } from "../../constants"
import TransactionsStatus from "../../components/TransactionStatus"
import ManagerStatus from "../../components/ManagerStatus"

const nextPage = `/${COMMISSION_PAGE}/${COMMISSION_FINAL_PAGE}`
// 4-1
const Final = () => {
  const balance = useSelector(state => state.user.balance)

  useLoading()

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
        display={"flex"}
        flexDir={"column"}
        gap={"30px"}
        justifyContent={"center"}
        alignItems={"center"}
        textAlign={"center"}
      >
        <Flex
          flexDir={{ base: "column", md: "row" }}
          alignItems={{ base: "center", md: "center" }}
          gap={{ md: "30px" }}
          maxW={"500px"}
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
        <Text fontSize={"24px"} fontWeight={"600"}>
          Expect the receipt of funds
        </Text>

        <Text fontSize={"20px"}>
          Funds will enter your account within 3 banking days.
          <br />
          <br />
          You can speed up this procedure by writing in the mail of technical
          support.
          <br />
          <br />
          Expect receipt of funds.
        </Text>

        <Flex flexDir={"column"} gap={"15px"} marginBottom={{ sm: "50px" }}>
          <FormCheckItem checked={true} label={"Funds are sent."} />
          <FormCheckItem
            checked={true}
            label={" Expect the receipt of funds."}
          />
        </Flex>
      </Box>
    </ChatCard>
  )
}

export default Final
