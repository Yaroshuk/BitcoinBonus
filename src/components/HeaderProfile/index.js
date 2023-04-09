import { Flex } from "@chakra-ui/react"
import React from "react"
import CurrentOnline from "../CurrentOnline"
import { ProfileIcon } from "../Icons"
import ProfileBalance from "../ProfileBalance"

const HeaderProfile = ({ isChat }) => {
  return (
    <Flex gap="13px">
      <CurrentOnline display={{ base: isChat ? "none" : "flex", md: "flex" }} />
      <ProfileBalance display={{ base: isChat ? "flex" : "none" }} />
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
        <ProfileIcon />
      </Flex>
    </Flex>
  )
}

export default HeaderProfile
