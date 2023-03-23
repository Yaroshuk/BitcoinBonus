import React from "react"
import { CalendarIcon } from "@chakra-ui/icons"
import { Text, Flex } from "@chakra-ui/react"

import CustomCard from "../../CustomCard"
import TopMainersList from "../../TopMainersList"

// TODO: add current month
const TopMainers = () => {
  return (
    <CustomCard
      title="Top Mainers"
      leftBlock={
        <Flex
          gap={"8px"}
          color={"#D3C2E9"}
          fontSize={"20px"}
          fontWeight={"semibold"}
          alignItems={"center"}
        >
          <CalendarIcon />
          <Text>March</Text>
        </Flex>
      }
    >
      <TopMainersList />
    </CustomCard>
  )
}

export default TopMainers
