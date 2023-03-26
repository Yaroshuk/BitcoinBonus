import React from "react"
import { Flex, Image, Text } from "@chakra-ui/react"

// TODO: add random number
const CurrentOnline = () => {
  return (
    <Flex
      px={{ base: 3, sm: 4 }}
      borderRadius="sm"
      bg="white"
      gap="8px"
      alignItems="center"
      h={{ base: "44px", sm: "54px" }}
    >
      <Image
        src="./img/icons/indicator-online.svg"
        h={{ base: "38px", sm: "100%" }}
      />
      <Text
        color={"brand.600"}
        fontSize={{ base: "14px", sm: "18px" }}
        fontWeight="bold"
      >
        268 now online
      </Text>
    </Flex>
  )
}

export default CurrentOnline
