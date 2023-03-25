import React from "react"
import { Outlet } from "react-router-dom"
import { Box, Container, Flex, VStack } from "@chakra-ui/react"

import Header from "../Header"
import Footer from "../Footer"
import Logo from "../Logo"
import HeaderProfile from "../HeaderProfile"

const Layout = ({ children }) => {
  return (
    <>
      <Container
        minW="100vw"
        minH="100vh"
        bg={"#F0ECF5"}
        px={{ base: 4, sm: 8, lg: "70px" }}
        py={{ base: 0, lg: "30px" }}
        maxW="1440px"
      >
        <VStack w="full" h="full" minH="100vh">
          <Header>
            <Logo />
            <HeaderProfile />
          </Header>
          <Box as="div" flex={1} width="100%" height="100%">
            <Outlet />
          </Box>
          <Footer />
        </VStack>
      </Container>
    </>
  )
}

export default Layout
