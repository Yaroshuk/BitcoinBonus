import React, { useState, useEffect } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { Box, Container, Flex, VStack } from "@chakra-ui/react"

import Header from "../Header"
import Footer from "../Footer"
import Logo from "../Logo"
import HeaderProfile from "../HeaderProfile"
import { useSelector } from "react-redux"
import {
  CHAT_LAST_PAGE,
  CHAT_PAGE,
  FORM_PAGE,
  WITHDRAW_PAGE
} from "../../constants"

const Layout = ({ children }) => {
  const [isChat, setIsChat] = useState(false)

  const isLoading = useSelector(state => state.global.isLoading)

  const location = useLocation()

  useEffect(() => {
    if (
      location.pathname === `/${CHAT_PAGE}` ||
      location.pathname === `/${FORM_PAGE}` ||
      location.pathname === `/${CHAT_LAST_PAGE}` ||
      location.pathname === `/${WITHDRAW_PAGE}`
    ) {
      setIsChat(true)
    }
  }, [location.pathname])

  // TODO: add balance to header

  return (
    <>
      <Container
        minW="100vw"
        minH="100vh"
        bg={isChat ? "#431480" : "#F0ECF5"}
        px={{ base: isChat ? 0 : 4, sm: 8, lg: "70px" }}
        py={{ base: 0, lg: "30px" }}
      >
        <VStack
          w="full"
          h="full"
          minH="100vh"
          maxW={"1050px"}
          margin={"0 auto"}
        >
          <Header px={{ base: isChat ? "4" : 0, sm: "0" }}>
            <Logo isChat={isChat} />
            <HeaderProfile isChat={isChat} />
          </Header>
          <Box as="div" flex={1} width="100%" height="100%">
            <Outlet />
          </Box>
          <Footer isChat={isChat} />
        </VStack>
      </Container>
      {isLoading && (
        <Box
          position={"fixed"}
          width={"100vw"}
          height={"100vh"}
          left={"0"}
          top={"0"}
          zIndex={"10"}
          background={"rgba(0,0,0,0.5)"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          color={"white"}
          fontSize={"20px"}
          fontWeight={"semibold"}
        >
          Searching your profile. <br /> Please wait a moment.
        </Box>
      )}
    </>
  )
}

export default Layout
