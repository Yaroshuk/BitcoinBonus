import { Box } from "@chakra-ui/react"
import React, { useEffect } from "react"
import { CHAT_LAST_PAGE, LAST_VISITED } from "../constants"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import ManagerChatLast from "../components/Blocks/ManagerChatLast"

const ChatLast = () => {
  const isLogged = useSelector(state => state.user.isLogged)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLogged) return

    const lastVisited = localStorage.getItem(LAST_VISITED) ?? CHAT_LAST_PAGE

    if (location.pathname !== `/${lastVisited}`) {
      navigate(`/${lastVisited}`)
    }
  }, [])

  return <ManagerChatLast />
}

export default ChatLast
