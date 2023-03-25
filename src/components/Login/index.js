import React from "react"
import { Flex } from "@chakra-ui/react"
import LoginForm from "../LoginForm"
import LoginInfo from "../LoginInfo"

const Login = ({ filled, setFilled }) => {
  return (
    <Flex
      flexDir={{ base: "column", sm: "row" }}
      gap={{ base: "20px", sm: "0" }}
    >
      <LoginForm filled={filled} setFilled={setFilled} />
      <LoginInfo />
    </Flex>
  )
}

export default Login
