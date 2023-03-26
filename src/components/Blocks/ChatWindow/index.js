import React, { useEffect, useRef } from "react"
import { Box, Button } from "@chakra-ui/react"
import ChatMessage from "../../ChatMessage"

const ChatWindow = ({ messages, ...props }) => {
  const refChatWindow = useRef()

  useEffect(() => {
    if (!refChatWindow.current) return

    refChatWindow.current.scroll({
      top: 10000,
      behavior: "smooth"
    })
  }, [messages, refChatWindow])

  return (
    <Box
      border={"1px solid black"}
      width={"100%"}
      minH={"250px"}
      maxH={"300px"}
      {...props}
      overflowY={"auto"}
      ref={refChatWindow}
    >
      <Box display={"flex"} flexDir={"column"} gap={"28px"}>
        {messages &&
          messages?.length &&
          messages.map((message, index) => {
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
      </Box>
    </Box>
  )
}

export default ChatWindow
