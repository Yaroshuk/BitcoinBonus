import React from "react"
import { Grid, Box } from "@chakra-ui/react"
import Login from "../components/Login"
import FAQBlock from "../components/Blocks/FAQBlock"

const Home = () => {
  return (
    <Grid
      width="100%"
      height="100%"
      templateColumns={{ base: "1fr", sm: "1fr 32%" }}
      gap="20px"
    >
      <Login />
      <Box width={"100%"} height="50px" bgColor={"green"} />
      <FAQBlock />
    </Grid>
  )
}

export default Home
