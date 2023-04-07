import moment from "moment"
import { Text, Flex, Box, Icon } from "@chakra-ui/react"
import React, { useState, useEffect, useCallback } from "react"
import { useTimer } from "react-timer-hook"
import ChatCard from "../../ChatCard"
import ManagerChatWaiting from "../ManagerChatWaiting"
import { useDispatch, useSelector } from "react-redux"
import { useManagerChar } from "../../../utils/chat"
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai"
import { thousandsFormatter } from "../../../utils"

// let mainTimer = null
// let messageTimer = null
const nickname = "Amelia"

const FillForm = () => {
  const balance = useSelector(state => state.user.balance)

  return (
    <ChatCard
      title={"Online chat"}
      subtitle={"of service member"}
      position={"relative"}
      bodyStyles={{
        display: "flex",
        flexDir: "column"
      }}
    >
      <Flex>
        <Box
          fontSize={{ base: "14px", sm: "18px" }}
          color={"#21D233"}
          background={"#E0F8E3"}
          p={"10px"}
          borderRadius={"4px"}
        >
          <Icon as={AiOutlineCheckCircle} />
          Money successfully credited to Swift
        </Box>

        <Flex>
          <Box>
            <Text fontSize={{ base: "20px", sm: "24px" }} fontWeight={"600"}>
              Your payout is:
            </Text>
            <Text
              fontSize={{ base: "40px", sm: "48px" }}
              fontWeight={"bold"}
              color={"brand.600"}
            >{`${thousandsFormatter(balance)}`}</Text>
          </Box>
          <Text color={"pink.100"} fontSize={{ base: "16px", sm: "20px" }}>
            You need to withdraw money within 24 hours!
          </Text>
        </Flex>
      </Flex>
    </ChatCard>
  )
}

export default FillForm
