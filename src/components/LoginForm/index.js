import React from "react"
import {
  Flex,
  Box,
  Heading,
  FormControl,
  Input,
  FormLabel,
  Button
} from "@chakra-ui/react"
import { gradientCard } from "../../chakra"

const LoginForm = () => {
  return (
    <Flex
      flexDir={{ base: "column", sm: "row" }}
      gap={{ base: "20px", sm: "0" }}
    >
      <Box
        flex={1}
        padding={{ base: "40px", md: "60px" }}
        py={{ md: "50px" }}
        borderRadius={"sm"}
        borderTopRightRadius={{ sm: 0 }}
        borderBottomRightRadius={{ sm: 0 }}
        bg={"white"}
      >
        <Heading
          bgGradient={"linear(to-t, brand.900, brand.800)"}
          bgClip="text"
        >
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
          <Input minH={{ base: "58px", sm: "72px" }} size="lg" mb={"16px"} />
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
          <Input minH={{ base: "58px", sm: "72px" }} size="lg" />
        </FormControl>
        <Button mt={"30px"} w="100%">
          Log In
        </Button>
      </Box>
      <Box
        flex={1}
        bgGradient={gradientCard}
        borderRadius={"sm"}
        padding={{ base: "40px", md: "60px" }}
        py={{ md: "50px" }}
        borderTopLeftRadius={{ sm: 0 }}
        borderBottomLeftRadius={{ sm: 0 }}
      >
        <Heading>
          What is <br /> BitcoinBonus?
        </Heading>
      </Box>
    </Flex>
  )
}

export default LoginForm
