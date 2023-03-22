import React from "react"
import { Flex, Text, Link, Box } from "@chakra-ui/react"

const FooterMenu = ({ title, menu }) => {
  return (
    <Flex flexDirection="column">
      <Link fontSize="14px" fontWeight="bold" color={{ base: "brand.400", sm: "black" }} mb="20px">
        {title}
      </Link>
      <Box display={{ base: "none", sm: "flex" }} flexDirection="column" gap="16px">
        {menu.map((item, index) => (
          <Link key={index}>{item}</Link>
        ))}
      </Box>
    </Flex>
  )
}

export default FooterMenu
