import React, { useCallback, useState } from "react"
import { Grid, Box, Flex } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import Login from "../components/Login"
import FAQBlock from "../components/Blocks/FAQBlock"
import TopMainers from "../components/Blocks/TopMainers"
import YourBalance from "../components/Blocks/YourBalance"
import LoginModal from "../components/Modals/LoginModal"
import MemberChat from "../components/Blocks/MemberChat"
import UserBlock from "../components/Blocks/UserBlock"
import MainingHistory from "../components/Blocks/MainingHistory"
import Recomendation from "../components/Blocks/Recomendation"
import { useProtectedRoute } from "../utils"
import Banner from "../components/Blocks/Banner"

const User = () => {
  const [isOpenModal, setIsOpenModal] = useState(true)
  const [isFormFilled, setIsFormFilled] = useState(false)
  // useProtectedRoute()

  const isLogged = useSelector(state => state.user.isLogged)
  console.log(isLogged)

  const handleFormFilled = useCallback(
    state => {
      setIsFormFilled(state)
    },
    [setIsFormFilled]
  )

  const closeModal = useCallback(() => {
    setIsOpenModal(false)
    // handleFormFilled(true)
  }, [setIsOpenModal])

  return (
    <Grid
      width="100%"
      height="100%"
      templateColumns={{ base: "1fr", sm: "1fr 32%" }}
      gap="20px"
    >
      <Flex gap={"20px"} flexDirection={"column"} overflow={"hidden"}>
        {" "}
        <UserBlock />
        <Recomendation />
        <MainingHistory />
        <MemberChat />
      </Flex>
      <Flex gap={"20px"} flexDirection={"column"}>
        {" "}
        <YourBalance />
        <TopMainers />
        <Banner />
      </Flex>
    </Grid>
  )
}

export default User
