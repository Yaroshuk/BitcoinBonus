import React from "react"
import { Box, Text } from "@chakra-ui/react"
import CustomCard from "../../CustomCard"
import ProgressBar from "../../ProgressBar"
import CollectorWindow from "../../CollectorWindow"

const BonusesCollector = () => {
  const btc = "0,00133"
  const money = "24 284" // TODO: get data from store

  return (
    <CustomCard
      title={"Collect your bonus"}
      rightBlock={
        <Text
          fontSize={{ base: "16px", sm: "24px" }}
          fontWeight={"normal"}
          color={"pink.100"}
        >
          Please wait ...
        </Text>
      }
      bodyPadding={"0 20px 20px"}
    >
      <Text
        fontSize={{ base: "16px", sm: "32px" }}
        fontWeight={"semibold"}
        color={"pink.100"}
      >{`Balance: ${btc}BTC  $${money}`}</Text>
      <Box>
        <ProgressBar />
        <CollectorWindow />
        <Text color={"pink.100"} fontSize={{ base: "14px", sm: "18px" }}>
          *Usually the process of collecting bonuses takes 5-10 minutes
        </Text>
      </Box>
    </CustomCard>
  )
}

export default BonusesCollector
