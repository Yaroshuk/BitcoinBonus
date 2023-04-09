import React, { useCallback, useEffect, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Text } from "@chakra-ui/react"
import {
  addMessage,
  setLastMessage,
  setUserMessage,
  setWriting
} from "../../../store/slices/memberChat"

import CustomCard from "../../CustomCard"
import { ReactComponent as ChatIcon } from "./chat.svg"
import ChatInput from "../../ChatInput"
import ChatWindow from "../ChatWindow"
import moment from "moment"
import { memberChatNiknames, chatMessages } from "../../../data"
import { getRandomInt } from "../../../utils"

let mainTimer = null
let messageTimer = null

const MemberChat = () => {
  const dispatch = useDispatch()
  const messages = useSelector(state => state.memberChat.messages)
  const lastMessage = useSelector(state => state.memberChat.lastMessage)
  const inputValue = useSelector(state => state.memberChat.userMessage)
  const writing = useSelector(state => state.memberChat.writing)

  const messagesRef = useRef(messages)
  const lastMessageRef = useRef(lastMessage)

  useEffect(() => {
    messagesRef.current = messages
    lastMessageRef.current = lastMessage
  }, [messages, lastMessage])

  const handleInputChange = useCallback(
    value => {
      dispatch(setUserMessage(value))
    },
    [setUserMessage, dispatch]
  )

  const handleAddMessage = useCallback(() => {
    if (!inputValue) return

    dispatch(setUserMessage(""))
    dispatch(
      addMessage({
        text: inputValue,
        isUser: true,
        time: moment().format("HH:mm")
      })
    )
  }, [addMessage, dispatch, inputValue])

  const handleMessageTimer = () => {
    const lastMessage = lastMessageRef.current
    // Message
    if (lastMessage >= chatMessages.length) {
      dispatch(setLastMessage(0))
    }

    const message = chatMessages[lastMessage] ?? chatMessages[0]

    dispatch(
      addMessage({
        text: message.text,
        author: message.name,
        time: moment().format("HH:mm")
      })
    )

    let nextMessageId = +lastMessage + 1

    if (nextMessageId === chatMessages.length) {
      nextMessageId = 0
    }

    dispatch(setLastMessage(nextMessageId))

    dispatch(setWriting(false))

    if (mainTimer) {
      clearTimeout(mainTimer)
    }

    mainTimer = setTimeout(() => hanleTimer(), getRandomInt(8, 20) * 1000)
  }

  const hanleTimer = () => {
    const nextMessage = chatMessages[lastMessageRef.current] ?? chatMessages[0]

    dispatch(setWriting(nextMessage.name))

    mainTimer = null

    if (messageTimer) {
      clearTimeout(messageTimer)
    }

    messageTimer = setTimeout(
      () => handleMessageTimer(),
      getRandomInt(5, 10) * 1000
    )
  }

  useEffect(() => {
    mainTimer = setTimeout(() => hanleTimer(), getRandomInt(3, 10) * 1000)

    return () => {
      clearTimeout(mainTimer)
      clearTimeout(messageTimer)
    }
  }, [])

  return (
    <CustomCard
      title={"Online chat"}
      subtitle={"of service member"}
      leftBlock={<ChatIcon />}
      position={"relative"}
    >
      <ChatWindow messages={messages} mb={"5px"} writing={writing} />
      <ChatInput
        value={inputValue}
        onChange={handleInputChange}
        onAddMessage={handleAddMessage}
        writing={writing}
      />
    </CustomCard>
  )
}

export default MemberChat
