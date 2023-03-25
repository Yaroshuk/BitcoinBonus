import React, { useCallback, useState } from "react"
import { Grid, Box, Flex } from "@chakra-ui/react"
import Login from "../components/Login"
import FAQBlock from "../components/Blocks/FAQBlock"
import TopMainers from "../components/Blocks/TopMainers"
import YourBalance from "../components/Blocks/YourBalance"
import LoginModal from "../components/Modals/LoginModal"

const Home = () => {
  const [isOpenModal, setIsOpenModal] = useState(true)
  const [isFormFilled, setIsFormFilled] = useState(false)

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

  console.log("ddf", isFormFilled)
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
