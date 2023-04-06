import React, { useState, useEffect } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { Box, Container, Flex, VStack } from "@chakra-ui/react"

import Header from "../Header"
import Footer from "../Footer"
import Logo from "../Logo"
import HeaderProfile from "../HeaderProfile"
import { useSelector } from "react-redux"
import { CHAT_PAGE, LAST_VISITED, USER_PAGE } from "../../constants"

const Layout = ({ children }) => {
  const [isChat, setIsChat] = useState(false)

  const location = useLocation()

  useEffect(() => {
    if (location.pathname === `/${CHAT_PAGE}`) {
      setIsChat(true)
    }
  }, [location.pathname])

  return (
    <>
      <Container
        minW="100vw"
        minH="100vh"
        bg={isChat ? "#431480" : "#F0ECF5"}
        px={{ base: 4, sm: 8, lg: "70px" }}
        py={{ base: 0, lg: "30px" }}
      >
        <VStack
          w="full"
          h="full"
          minH="100vh"
          maxW={"1620px"}
          margin={"0 auto"}
        >
          <Header>
            <Logo isChat={isChat} />
            <HeaderProfile />
          </Header>
          <Box as="div" flex={1} width="100%" height="100%">
            <Outlet />
          </Box>
          <Footer isChat={isChat} />
        </VStack>
      </Container>
    </>
  )
}

export default Layout
