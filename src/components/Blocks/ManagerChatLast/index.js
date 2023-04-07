import moment from "moment"
import { Text } from "@chakra-ui/react"
import React, { useState, useEffect, useCallback } from "react"
import { useTimer } from "react-timer-hook"
import ChatCard from "../../ChatCard"
import ChatInput from "../../ChatInput"
import ChatWindow from "../ChatWindow"
import ManagerChatWaiting from "../ManagerChatWaiting"
import { useNavigate } from "react-router-dom"
import { ReactComponent as ChatIcon } from "./chat.svg"
import {
  setWriting,
  addMessage,
  setMessages
} from "../../../store/slices/managerChat"
import { useDispatch, useSelector } from "react-redux"
import { getRandomInt } from "../../../utils"
import { managerFifthStep } from "../../../data"
import { useManagerChar } from "../../../utils/chat"
import { FORM_PAGE, LAST_VISITED, WITHDRAW_PAGE } from "../../../constants"

const ManagerChatLast = () => {
  const [isManagerOnline, setIsManagerOnline] = useState(false) // TODO: turn on
  const [messagesSource, setMessagesSource] = useState(managerFifthStep)
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const messages = useSelector(state => state.managerChat.messages)
  const writing = useSelector(state => state.managerChat.writing)

  useManagerChar(messagesSource)

  const { seconds } = useTimer({
    expiryTimestamp: moment().add(5, "seconds"),
    onExpire: () => {
      setTimeout(() => {
        setIsManagerOnline(true)
        localStorage.setItem(LAST_VISITED, WITHDRAW_PAGE)
      }, 1000)
    }
  })

  const controllHandler = useCallback(
    item => {
      const userMessage = {
        text: item.label,
        isUser: true,
        author: "user",
        time: moment().format("HH:mm")
      }

      const newMessages = [...messages]
      newMessages.pop()
      newMessages.push(userMessage)

      dispatch(setMessages(newMessages))

      if (item.value === "convert") {
        navigate("/withdraw")
        localStorage.setItem(LAST_VISITED, WITHDRAW_PAGE)
        // return
      }
    },
    [messages]
  )

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
        maxH={{ base: "450px", sm: "400px" }}
        messages={messages}
        mb={"40px"}
        writing={writing}
        onControl={controllHandler}
      />
      <ChatInput disabled />
    </ChatCard>
  )
}

export default ManagerChatLast
