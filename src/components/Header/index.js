import React from "react"
import { Flex } from "@chakra-ui/react"

import { Profile } from "../Icons"

const Header = ({ children, ...props }) => {
  return (
    <Flex
      w="100%"
      {...props}
      justifyContent="space-between"
      py={{ base: "20px", md: "30px" }}
      alignItems="center"
    >
      {children}
    </Flex>
  )
}

export default Header
