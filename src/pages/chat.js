import React, { useCallback, useState, useEffect } from "react"
import { Grid, Box, Flex } from "@chakra-ui/react"
import Login from "../components/Login"
import FAQBlock from "../components/Blocks/FAQBlock"
import TopMainers from "../components/Blocks/TopMainers"
import YourBalance from "../components/Blocks/YourBalance"
import LoginModal from "../components/Modals/LoginModal"
import MemberChat from "../components/Blocks/MemberChat"
import UserBlock from "../components/Blocks/UserBlock"
import MainingHistory from "../components/Blocks/MainingHistory"
import Recomendation from "../components/Blocks/Recomendation"
import MyMainers from "../components/Blocks/MyMainers"
import CollectBonuses from "../components/Blocks/CollectBonuses"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useProtectedRoute } from "../utils"
import BonusesCollector from "../components/Blocks/BonusesCollector"
import CustomCard from "../components/CustomCard"
import ChatCard from "../components/ChatCard"
import ManagerChat from "../components/Blocks/ManagerChat"
import { CHAT_PAGE, FORM_PAGE, LAST_VISITED } from "../constants"

const Chat = () => {
  useProtectedRoute()

  const isLogged = useSelector(state => state.user.isLogged)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLogged) return

    const lastVisited = localStorage.getItem(LAST_VISITED) ?? CHAT_PAGE

    if (location.pathname !== `/${lastVisited}`) {
      navigate(`/${lastVisited}`)
    }
  }, [])

  return <ManagerChat />
}

export default Chat
