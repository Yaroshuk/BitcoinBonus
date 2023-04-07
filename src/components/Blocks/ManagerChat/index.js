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
import {
  managerFirstStep,
  managerFourthStep,
  managerSecondStep,
  managerThirdStep
} from "../../../data"
import { useManagerChar } from "../../../utils/chat"
import { FORM_PAGE, LAST_VISITED } from "../../../constants"

// let mainTimer = null
// let messageTimer = null
const nickname = "Amelia"

const ManagerChat = () => {
  const [isManagerOnline, setIsManagerOnline] = useState(false) // TODO: turn on
  const [messagesSource, setMessagesSource] = useState(managerFirstStep)
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
        localStorage.setItem(LAST_VISITED, FORM_PAGE)
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

      if (item.value === "dont_remember") {
        setMessagesSource(managerSecondStep)
        return
      }

      if (item.value === "no") {
        setMessagesSource(managerThirdStep)
        return
      }

      if (item.value === "yes") {
        setMessagesSource(managerFourthStep)
        return
      }

      if (item.value === "fill_form") {
        navigate("/form")
        localStorage.setItem(LAST_VISITED, FORM_PAGE)
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
        maxH={"400px"}
        messages={messages}
        mb={"40px"}
        writing={writing}
        onControl={controllHandler}
      />
      <ChatInput />
    </ChatCard>
  )
}

export default ManagerChat
