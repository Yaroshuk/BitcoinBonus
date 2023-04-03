import React, { useCallback, useState } from "react"
import { Grid, Box, Flex } from "@chakra-ui/react"
import Login from "../components/Login"
import FAQBlock from "../components/Blocks/FAQBlock"
import TopMainers from "../components/Blocks/TopMainers"
import YourBalance from "../components/Blocks/YourBalance"
import LoginModal from "../components/Modals/LoginModal"
import MemberChat from "../components/Blocks/MemberChat"
import UserBlock from "../components/Blocks/UserBlock"
import MainingHistory from "../components/Blocks/MainingHistory"
import Recomendation from "../components/Blocks/Recomendation"
import MyMainers from "../components/Blocks/MyMainers"
import CollectBonuses from "../components/Blocks/CollectBonuses"
import { useProtectedRoute } from "../utils"
import BonusesCollector from "../components/Blocks/BonusesCollector"

const Collecting = () => {
  useProtectedRoute()

  return (
    <Grid
      width="100%"
      height="100%"
      templateColumns={{ base: "1fr", sm: "1fr 32%" }}
      gap="20px"
    >
      <Flex gap={"20px"} flexDirection={"column"} overflow={"hidden"}>
        {" "}
        <BonusesCollector />
        <MainingHistory />
        <MemberChat />
      </Flex>
      <Flex gap={"20px"} flexDirection={"column"}>
        {" "}
        <YourBalance />
        <TopMainers />
      </Flex>
    </Grid>
  )
}

export default Collecting
