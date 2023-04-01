import { Box, Text } from "@chakra-ui/react"
import React from "react"

const ChatMessage = ({ text, author, time, isUser, ...props }) => {
  return (
    <Box
      maxW={"80%"}
      padding={"15px"}
      border={"2px solid #FAFAFA"}
      bg={isUser ? "#fff" : "#FAFAFA"}
      borderRadius={"sm"}
      alignSelf={isUser ? "flex-end" : "flex-start"}
      borderBottomLeftRadius={!isUser && "0"}
      borderBottomRightRadius={isUser && "0"}
    >
      <Box fontSize={"md"} fontWeight={"normal"} mb={"12px"}>
        {text}
      </Box>
      <Box display={"flex"} gap={"20px"}>
        <Text
          color={isUser ? "#D3C2E9" : "#000"}
          fontSize={"10px"}
          fontWeight={"700"}
        >
          {isUser ? "it's your message" : author}
        </Text>
        <Text
          color={isUser ? "#D3C2E9" : "#000"}
          fontSize={"10px"}
          fontWeight={"700"}
        >
          {time}
        </Text>
      </Box>
    </Box>
  )
}

export default ChatMessage
