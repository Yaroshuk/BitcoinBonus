import React from "react"
import { Grid, Box } from "@chakra-ui/react"
import LoginForm from "../components/LoginForm"

const Home = () => {
  return (
    <Grid
      width="100%"
      height="100%"
      templateColumns={{ base: "1fr", sm: "1fr 32%" }}
      gap="20px"
    >
      <LoginForm />
      <Box width={"100%"} height="50px" bgColor={"green"} />
      <Box width={"100%"} height="200px" bgColor={"blue"} />
    </Grid>
  )
}

export default Home
