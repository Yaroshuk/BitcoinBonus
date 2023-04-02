import React, { useCallback, useState, useEffect } from "react"
import { Grid, Box, Flex } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import Login from "../components/Login"
import FAQBlock from "../components/Blocks/FAQBlock"
import TopMainers from "../components/Blocks/TopMainers"
import YourBalance from "../components/Blocks/YourBalance"
import LoginModal from "../components/Modals/LoginModal"
import ProtectedRoute from "../components/ProtectedRoute"

let timer = null

const Home = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isFormFilled, setIsFormFilled] = useState(false)

  const handleFormFilled = useCallback(
    state => {
      setIsFormFilled(state)
    },
    [setIsFormFilled]
  )

  const closeModal = useCallback(() => {
    setIsOpenModal(false)
    handleFormFilled(true)
  }, [setIsOpenModal])

  useEffect(() => {
    timer = setTimeout(() => {
      setIsOpenModal(true)
    }, 1000)
  }, [])

  return (
    <Grid
      width="100%"
      height="100%"
      templateColumns={{ base: "1fr", sm: "1fr 32%" }}
      gap="20px"
    >
      <Flex gap={"20px"} flexDirection={"column"}>
        {" "}
        <Login filled={isFormFilled} setFilled={handleFormFilled} />
        <FAQBlock />
      </Flex>
      <Flex gap={"20px"} flexDirection={"column"}>
        {" "}
        <YourBalance />
        <TopMainers />
      </Flex>
      <LoginModal isOpen={isOpenModal} closeModal={closeModal} />
    </Grid>
  )
}

export default Home
