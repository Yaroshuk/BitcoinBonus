import { Flex } from "@chakra-ui/react"
import React from "react"
import CurrentOnline from "../CurrentOnline"
import { Profile } from "../Icons"

const HeaderProfile = () => {
  return (
    <Flex gap="13px">
      <CurrentOnline />
      <Flex
        w={{ base: "44px", sm: "54px" }}
        h={{ base: "44px", sm: "54px" }}
        bg="white"
        fontSize="26px"
        borderRadius="sm"
        justifyContent="center"
        alignItems="center"
        color="brand.600"
      >
        <Profile />
      </Flex>
    </Flex>
  )
}

export default HeaderProfile
