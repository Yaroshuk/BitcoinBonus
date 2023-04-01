import React, { useCallback, useEffect, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Text } from "@chakra-ui/react"
import {
  addMessage,
  setUserMessage,
  setWriting
} from "../../../store/slices/memberChat"

import CustomCard from "../../CustomCard"
import { ReactComponent as ChatIcon } from "./chat.svg"
import ChatInput from "../../ChatInput"
import ChatWindow from "../ChatWindow"
import moment from "moment"
import { memberChatMessages, memberChatNiknames } from "../../../data"
import { getRandomInt } from "../../../utils"

let mainTimer = null
let messageTimer = null

const MemberChat = () => {
  const dispatch = useDispatch()
  const messages = useSelector(state => state.memberChat.messages)
  const inputValue = useSelector(state => state.memberChat.userMessage)
  const writing = useSelector(state => state.memberChat.writing)

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
        time: moment().format("HH:MM")
      })
    )
  }, [addMessage, dispatch, inputValue])

  const handleMessageTimer = nickname => {
    const message =
      memberChatMessages[getRandomInt(0, memberChatMessages.length)]

    dispatch(
      addMessage({
        text: message,
        author: nickname,
        time: moment().format("HH:MM")
      })
    )

    dispatch(setWriting(false))

    if (mainTimer) {
      clearTimeout(mainTimer)
    }

    mainTimer = setTimeout(() => hanleTimer(), getRandomInt(5, 40) * 1000)
  }

  const hanleTimer = () => {
    const nickname =
      memberChatNiknames[getRandomInt(0, memberChatNiknames.length)]

    dispatch(setWriting(nickname))

    mainTimer = null

    if (messageTimer) {
      clearTimeout(messageTimer)
    }

    messageTimer = setTimeout(
      () => handleMessageTimer(nickname),
      getRandomInt(5, 10) * 1000
    )
  }

  useEffect(() => {
    mainTimer = setTimeout(() => hanleTimer(), getRandomInt(5, 40) * 1000)

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
      {writing && (
        <Text
          position={"absolute"}
          bottom={"100px"}
          left={"30px"}
          color={"pink.100"}
          fontWeight={"semibold"}
        >{`${writing} typing...`}</Text>
      )}
      <ChatWindow messages={messages} mb={"40px"} writing={writing} />
      <ChatInput
        value={inputValue}
        onChange={handleInputChange}
        onAddMessage={handleAddMessage}
      />
    </CustomCard>
  )
}

export default MemberChat
