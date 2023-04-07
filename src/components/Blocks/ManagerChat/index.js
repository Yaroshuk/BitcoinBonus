import moment from "moment"
import { Text } from "@chakra-ui/react"
import React, { useState, useEffect, useCallback } from "react"
import { useTimer } from "react-timer-hook"
import ChatCard from "../../ChatCard"
import ChatInput from "../../ChatInput"
import ChatWindow from "../ChatWindow"
import ManagerChatWaiting from "../ManagerChatWaiting"
import { ReactComponent as ChatIcon } from "./chat.svg"
import {
  setWriting,
  addMessage,
  setMessages
} from "../../../store/slices/managerChat"
import { useDispatch, useSelector } from "react-redux"
import { getRandomInt } from "../../../utils"
import { managerFirstStep } from "../../../data"
import { useManagerChar } from "../../../utils/chat"

// let mainTimer = null
// let messageTimer = null
const nickname = "Amelia"

const ManagerChat = () => {
  const [isManagerOnline, setIsManagerOnline] = useState(true) // TODO: turn on
  const [messagesSource, setMessagesSource] = useState(managerFirstStep)

  const dispatch = useDispatch()
  const messages = useSelector(state => state.managerChat.messages)
  const writing = useSelector(state => state.managerChat.writing)

  useManagerChar(messagesSource)

  const { seconds } = useTimer({
    expiryTimestamp: moment().add(5, "seconds"),
    onExpire: () => {
      setTimeout(() => {
        setIsManagerOnline(true)
      }, 1000)
    }
  })

  if (!isManagerOnline) {
    return <ManagerChatWaiting sec={seconds} />
  }

  return (
    <ChatCard
      title={"Online chat"}
      subtitle={"of service member"}
      leftBlock={<ChatIcon />}
      position={"relative"}
      bodyStyles={{
        display: "flex",
        flexDir: "column"
      }}
    >
      {writing && (
        <Text
          position={"absolute"}
          bottom={"100px"}
          left={"30px"}
          color={"pink.100"}
          fontWeight={"semibold"}
        >{`${writing} typing...`}</Text>
      )}
      <ChatWindow
        flex={"1"}
        maxH={"400px"}
        messages={messages}
        mb={"40px"}
        writing={writing}
      />
      <ChatInput />
    </ChatCard>
  )
}

export default ManagerChat
