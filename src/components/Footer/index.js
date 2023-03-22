import React from "react"
import { Flex } from "@chakra-ui/react"

import FooterMenu from "../FooterMenu"

const Footer = () => {
  return (
    <Flex
      w="100%"
      pt={{ base: "50px", sm: "160px" }}
      pb={{ base: "50px", sm: "60px" }}
      alignItems={{ base: "center", sm: "flex-start" }}
      flexDirection={{ base: "column", sm: "row" }}
      justifyContent={"space-between"}
    >
      <FooterMenu
        title="Company"
        menu={["About us", "Careers", "Blog", "Plans", "Security"]}
      />
      <FooterMenu
        title="Business"
        menu={["Instagram", "Careers", "Blog", "Plans", "Security"]}
      />
      <FooterMenu
        title="Developers"
        menu={["Cloud", "Wallet SDK", "BB Pay SDK", "Node"]}
      />
      <FooterMenu
        title="Support"
        menu={["Contact Us", "Cross account", "Payment", "Account access"]}
      />
    </Flex>
  )
}

export default Footer
