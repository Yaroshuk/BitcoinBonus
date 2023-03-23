import React from "react"
import { Heading, Box, Text } from "@chakra-ui/react"

import { BitcoinIcon } from "../Icons"
import { gradientCard } from "../../chakra"
import BageBitcoin from "../BageBitcoin"

const LoginInfo = () => {
  return (
    <Box
      flex={1}
      bgGradient={gradientCard}
      borderRadius={"sm"}
      padding={{ base: "40px", md: "60px" }}
      py={{ md: "50px" }}
      borderTopLeftRadius={{ sm: 0 }}
      borderBottomLeftRadius={{ sm: 0 }}
      color={"white"}
      position={"relative"}
    >
      <Heading mb={"32px"}>
        What is <br /> BitcoinBonus?
      </Heading>
      <Text fontSize={"md"} fontWeight={"semibold"}>
        {}
        Your reliable tool for passive income in the world of 21st century
        cryptocurreacy! <br />
        <br />
        We’re making Bitcoin mining accessible to everyone.
      </Text>
      <br />
      <Text fontSize={"md"}>
        You have access to to the latest and most advanced technology In the
        cloud mining industry with ony device. With this technology Your
        smartphone or computor. can absolutely safety ond uninterruptedly mine
        cryptocurrency. More 100.000 people around the world use Brtcotn Bonus
        as an oddlional sourco of income - now alto Your turn*
      </Text>
      <BitcoinIcon
        top={"10px"}
        right={"30px"}
        position={"absolute"}
        fontSize={"150px"}
        opacity={"0.1"}
        sx={{ transform: "rotate(30deg)" }}
      />
      <BageBitcoin
        position={"absolute"}
        top={"-28px"}
        right={"-10px"}
      />
    </Box>
  )
}

export default LoginInfo
