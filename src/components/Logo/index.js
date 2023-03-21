import React from "react"
import { Box, Link, Flex, Text } from "@chakra-ui/react"
import { BitcoinIcon } from "../Icons"

const Logo = () => {
  return (
    <Link
      display="flex"
      alignItems="center"
      gap="26px"
      href="#"
      fontSize={30}
      fontWeight="bold"
      textColor={"brand.600"}
      _hover={{
        color: "brand.500",
        "&>div": { bgGradient: "linear(to-t, brand.300, brand.100)" }
      }}
      textDecoration="none"
    >
      <Flex
        w="64px"
        h="64px"
        bgGradient="linear(to-t, brand.400, brand.200)"
        borderRadius="md"
        justifyContent="center"
        alignItems="center"
        fontSize="50px"
        color="white"
      >
        <BitcoinIcon />
      </Flex>
      <Text display={{ base: "none", sm: "block" }}>BitcoinBonus</Text>
    </Link>
  )
}

export default Logo
