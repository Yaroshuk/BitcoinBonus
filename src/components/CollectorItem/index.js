import { Box, Grid, Text } from "@chakra-ui/react"
import React from "react"

const CollectorItem = ({ wallet, sumBtc, sumUsd, status }) => {
  return (
    <Grid
      gridTemplateRows={{ base: "1fr 1fr", lg: "1fr" }}
      gridTemplateColumns={{ base: "1fr min-content", lg: "1fr 30% 20%" }}
      gap={{ base: "9px", lg: "15px" }}
      fontSize={{ base: "15px", sm: "16px" }}
      fontWeight={"400"}
      position={"relative"}
      paddingLeft={"20px"}
    >
      <Box
        width={"10px"}
        height={"10px"}
        borderRadius={"50px"}
        background={status ? "#21D233" : "#FF5959"}
        position={"absolute"}
        left={"0"}
        top={"7px"}
      />
      <Text
        gridColumn={{ base: "span 2", lg: "span 1" }}
        color={"brand.400"}
        textOverflow={"ellipsis"}
        whiteSpace={"nowrap"}
        overflow={"hidden"}
      >
        {wallet}
      </Text>
      <Text>{`${sumBtc} BTC (${sumUsd} USD)`}</Text>
      <Text
        textAlign={{ base: "right", sm: "left" }}
        fontWeight={"700"}
        color={status ? "#21D233" : "#FF5959"}
      >
        {status ? "Confirmed" : "Unconfirmed"}
      </Text>
    </Grid>
  )
}

export default CollectorItem
