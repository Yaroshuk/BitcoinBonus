import React, { useCallback } from "react"
import {
  Box,
  Heading,
  FormControl,
  Input,
  FormLabel,
  Button
} from "@chakra-ui/react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const LoginForm = ({ filled, setFilled }) => {
  const user = useSelector(state => state.user)
  const navigate = useNavigate()

  const handleFocus = useCallback(() => {
    setFilled(true)
  }, [setFilled])

  const handleLogin = useCallback(() => {
    navigate("/user")
  }, [navigate])

  return (
    <Box
      flex={1}
      padding={{ base: "40px", md: "60px" }}
      py={{ md: "50px" }}
      borderRadius={"sm"}
      borderTopRightRadius={{ sm: 0 }}
      borderBottomRightRadius={{ sm: 0 }}
      bg={"white"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
    >
      <Heading bgGradient={"linear(to-t, brand.900, brand.800)"} bgClip="text">
        Enter <br />
        for more features
      </Heading>
      <FormControl>
        <FormLabel
          pl={"16px"}
          color={"brand.600"}
          fontSize={"sm"}
          fontWeight={"500"}
        >
          Username
        </FormLabel>
        <Input
          minH={{ base: "58px", sm: "72px" }}
          size="lg"
          mb={"16px"}
          value={filled ? user.login : ""}
          disabled={!!filled}
          onFocus={handleFocus}
        />
      </FormControl>
      <FormControl>
        <FormLabel
          pl={"16px"}
          color={"brand.600"}
          fontSize={"sm"}
          fontWeight={"500"}
        >
          Password
        </FormLabel>
        <Input
          minH={{ base: "58px", sm: "72px" }}
          size="lg"
          value={filled ? user.password : ""}
          disabled={!!filled}
          onFocus={handleFocus}
        />
      </FormControl>
      <Button mt={"30px"} w="100%" isDisabled={!filled} onClick={handleLogin}>
        Log In
      </Button>
    </Box>
  )
}

export default LoginForm
