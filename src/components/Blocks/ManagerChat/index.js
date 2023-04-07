import moment from "moment"
import React, { useState, useEffect } from "react"
import { useTimer } from "react-timer-hook"
import ChatCard from "../../ChatCard"
import ManagerChatWaiting from "../ManagerChatWaiting"

const ManagerChat = () => {
  const [isManagerOnline, setIsManagerOnline] = useState(false)

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

  return <ChatCard>CHAT</ChatCard>
}

export default ManagerChat
