import React from "react"
import { Flex } from "@chakra-ui/react"

import FooterMenu from "../FooterMenu"

const Footer = ({ isChat }) => {
  return (
    <Flex
      w="100%"
      pt={{ base: "50px", sm: "90px" }}
      pb={{ base: "50px", sm: isChat ? "20px" : "60px" }}
      alignItems={{ base: "center", sm: "flex-start" }}
      flexDirection={{ base: "column", sm: "row" }}
      justifyContent={isChat ? "center" : "space-between"}
      gap={isChat && { base: "0", sm: "60px" }}
    >
      <FooterMenu
        title="Company"
        menu={["About us", "Careers", "Blog", "Plans", "Security"]}
        isChat={isChat}
      />
      <FooterMenu
        title="Business"
        menu={["Instagram", "Careers", "Blog", "Plans", "Security"]}
        isChat={isChat}
      />
      <FooterMenu
        title="Developers"
        menu={["Cloud", "Wallet SDK", "BB Pay SDK", "Node"]}
        isChat={isChat}
      />
      <FooterMenu
        title="Support"
        menu={["Contact Us", "Cross account", "Payment", "Account access"]}
        isChat={isChat}
      />
    </Flex>
  )
}

export default Footer
