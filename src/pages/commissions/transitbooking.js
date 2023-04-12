import moment from "moment"
import { Text, Flex, Box, Icon, Image, Button } from "@chakra-ui/react"
import React from "react"
import ChatCard from "../../components/ChatCard"
import { useSelector } from "react-redux"
import { thousandsFormatter, useGoTo } from "../../utils"
import FormCheckItem from "../../components/FormCheckItem"
import {
  COMMISSIOM_TRANSITBOOKING_PAGE,
  COMMISSION_PAGE
} from "../../constants"

const nextPage = `/${COMMISSION_PAGE}/${COMMISSIOM_TRANSITBOOKING_PAGE}`
// 2-4
const Transitbooking = () => {
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
            The transfer requires registration in the registry of non-taxable
            gifts
          </Text>
          <br />
          <Text fontSize={{ base: "16px", md: "20px" }}>
            In order to <b>promptly receive the entire amount</b> of the{" "}
            <b>${balance}</b> payment{" "}
            <b>without reporting to the supervisory authority</b>, it is{" "}
            <b>mandatory</b> to make a transter to the{" "}
            <b>gratuitous rewards registry</b>. This step is necessary to ensure
            you receive all the funds.
            <br />
            <br />
            Once you have made the transfer to the registry, the{" "}
            <b>funds will be booked in the transit cell</b> and{" "}
            <b>sent to the details you provided within 10 minutes.</b>
          </Text>
        </Flex>
        <Flex flexDir={"column"} fontSize={"20px"}>
          <Text fontSize={"20px"} mb={"10px"}>
            The cost for registering in the registry: <b>$86.</b>
          </Text>
          <Flex flexDir={"column"} gap={"10px"} justifyContent={"flex-start"}>
            <FormCheckItem
              checked={true}
              label={"Please make the transfer to the registry now"}
            />
            <FormCheckItem
              checked={true}
              label={
                "Your funds will instantly arrive in the previously indicated account"
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
          >
            Submit to the registry
          </Button>
        </Flex>
      </Flex>
    </ChatCard>
  )
}

export default Transitbooking
