import { Flex, Grid, GridItem } from "@chakra-ui/react"
import React from "react"

const TextStylePrimary = {
  color: "black",
  fontSize: { base: "14px", md: "18px" },
  fontWeight: "400"
}

const TextStyleSecondary = {
  color: "pink.100",
  fontSize: { base: "14px", md: "18px" },
  fontWeight: "400"
}

const MainingItem = ({ month, date, money, btc }) => {
  return (
    <Grid
      gridTemplateColumns={{ base: "1fr 1fr", sm: "30% 1fr" }}
      rowGap={{ base: "12px", md: "15px" }}
    >
      <GridItem {...TextStylePrimary}>{month}</GridItem>
      <GridItem {...TextStylePrimary}>{`$${money}`}</GridItem>
      <GridItem {...TextStyleSecondary}>{date}</GridItem>
      <GridItem {...TextStyleSecondary}>{`${btc} BTC`}</GridItem>
    </Grid>
  )
}

export default MainingItem
