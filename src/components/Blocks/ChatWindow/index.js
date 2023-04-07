import React, { useEffect, useRef } from "react"
import { Box, Button, Text } from "@chakra-ui/react"
import ChatMessage from "../../ChatMessage"
import { customScroll } from "../../../chakra"

const ChatWindow = ({ messages, writing, ...props }) => {
  const refChatWindow = useRef()

  useEffect(() => {
    if (!refChatWindow.current) return

    refChatWindow.current.scroll({
      top: 10000,
      behavior: "smooth"
    })
  }, [messages, refChatWindow])

  const getMessages = () => {
    if (!messages || !messages.length) return null

    return (
      <>
        {messages.map((message, index) => {
          return (
            <ChatMessage
              key={`${message.name}-${index}`}
              text={message.text}
              author={message.author}
              time={message.time}
              isUser={message.isUser}
            />
          )
        })}
      </>
    )
  }

  return (
    <Box
      width={"100%"}
      minH={"250px"}
      maxH={"300px"}
      padding={"12px"}
      {...props}
      position={"relative"}
      overflowY={"auto"}
      ref={refChatWindow}
      sx={customScroll}
    >
      <Box
        display={"flex"}
        flexDir={"column"}
        gap={"28px"}
        position={"relative"}
      >
        {getMessages()}
      </Box>
    </Box>
  )
}

export default ChatWindow
