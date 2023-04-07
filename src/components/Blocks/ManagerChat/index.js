import moment from "moment"
import React, { useState, useEffect } from "react"
import { useTimer } from "react-timer-hook"
import ChatCard from "../../ChatCard"
import ChatInput from "../../ChatInput"
import ChatWindow from "../ChatWindow"
import ManagerChatWaiting from "../ManagerChatWaiting"
import { ReactComponent as ChatIcon } from "./chat.svg"

const ManagerChat = () => {
  const [isManagerOnline, setIsManagerOnline] = useState(true) // TODO: turn on

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
      <ChatWindow messages={[]} flex={"1"} maxH={"none"} />
      <ChatInput />
    </ChatCard>
  )
}

export default ManagerChat
