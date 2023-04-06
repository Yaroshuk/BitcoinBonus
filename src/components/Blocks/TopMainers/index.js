import React from "react"
import { CalendarIcon } from "@chakra-ui/icons"
import { Text, Flex } from "@chakra-ui/react"
import { currentMonth } from "../../../utils"

import CustomCard from "../../CustomCard"
import TopMainersList from "../../TopMainersList"

const TopMainers = () => {
  return (
    <CustomCard
      title="Top Mainers"
      rightBlock={
        <Flex
          gap={"8px"}
          color={"#D3C2E9"}
          fontSize={"20px"}
          fontWeight={"semibold"}
          alignItems={"center"}
        >
          <CalendarIcon />
          <Text>{currentMonth()}</Text>
        </Flex>
      }
    >
      <TopMainersList />
    </CustomCard>
  )
}

export default TopMainers
