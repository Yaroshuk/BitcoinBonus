import React from "react"
import { Box, Link, Flex, Text } from "@chakra-ui/react"

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
      <Box
        w="64px"
        h="64px"
        bgGradient="linear(to-t, brand.400, brand.200)"
        borderRadius="md"
      >
        f
      </Box>
      <Text display={{ base: "none", sm: "block" }}>BitcoinBonus</Text>
    </Link>
  )
}

export default Logo
