import React from "react"
import { Flex, Text, Box } from "@chakra-ui/react"

const FooterMenu = ({ title, menu }) => {
  return (
    <Flex flexDirection="column">
      <Text>{title}</Text>
      <Box display={{ base: "none", sm: "flex" }} flexDirection="column">
        {menu.map((item, index) => (
          <Text key={index}>{item}</Text>
        ))}
      </Box>
    </Flex>
  )
}

export default FooterMenu
