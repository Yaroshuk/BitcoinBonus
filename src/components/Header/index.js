import React from "react"
import { Flex } from "@chakra-ui/react"

import { ProfileIcon } from "../Icons"

const Header = ({ children, ...props }) => {
  return (
    <Flex
      w="100%"
      justifyContent="space-between"
      py={{ base: "20px", md: "30px" }}
      alignItems="center"
      {...props}
    >
      {children}
    </Flex>
  )
}

export default Header
