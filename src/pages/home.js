import React from "react"
import { Grid, Box, Flex } from "@chakra-ui/react"
import Login from "../components/Login"
import FAQBlock from "../components/Blocks/FAQBlock"
import TopMainers from "../components/Blocks/TopMainers"

const Home = () => {
  return (
    <Grid
      width="100%"
      height="100%"
      templateColumns={{ base: "1fr", sm: "1fr 32%" }}
      gap="20px"
    >
      <Flex gap={"20px"} flexDirection={"column"}>
        {" "}
        <Login />
        <FAQBlock />
      </Flex>
      <Flex gap={"20px"} flexDirection={"column"}>
        {" "}
        <Box width={"100%"} height="50px" bgColor={"green"} />
        <TopMainers />
      </Flex>
    </Grid>
  )
}

export default Home
