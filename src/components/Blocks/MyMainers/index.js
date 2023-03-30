import { CalendarIcon } from "@chakra-ui/icons"
import React from "react"
import { Box, Flex, Grid, GridItem } from "@chakra-ui/react"
import { currencyFormatter, currentMonth } from "../../../utils"
import CustomCard from "../../CustomCard"
import MyMainerItem from "../../MyMainerItem"

const MyMainers = () => {
  const mainers = [
    {
      title: "PC 1",
      ip: "(IP 22.11.2233.33)",
      time: 131549702,
      isWorking: true,
      earned: 56.4
    },
    {
      title: "Mobile Phone 1",
      time: 413276000,
      isWorking: false,
      earned: 13.4
    }
  ]

  const earned = mainers.reduce((acc, item) => {
    return acc + item.earned
  }, 0)

  const rightBlock = () => {
    return (
      <Flex
        width={"100%"}
        justifyContent={"space-between"}
        color={"pink.100"}
        fontSize={{ base: "20px" }}
        fontWeight={"normal"}
        alignItems={"center"}
        gap={"15px"}
      >
        {`$${currencyFormatter.format(earned)} earned in`}
        <Flex fontWeight={"semibold"} alignItems={"center"} gap={"5px"}>
          <CalendarIcon />
          {currentMonth()}
        </Flex>
      </Flex>
    )
  }

  return (
    <CustomCard title={"Your mainers"} rightBlock={rightBlock()} flipHeader>
      <Grid
        color={"pink.100"}
        fontSize={"14px"}
        fontWeight={"400"}
        gridTemplateColumns={"1fr 35% 20%"}
        textAlign={"right"}
        p={"16px"}
        pt={"0"}
        pb={"20px"}
        mr={{ base: 0, lg: "28%" }}
      >
        <GridItem textAlign={"left"}>Device</GridItem>
        <GridItem>Working time</GridItem>
        <GridItem>Earned</GridItem>
      </Grid>
      <Flex flexDirection={"column"} gap={"10px"}>
        {mainers.map((item, index) => {
          return <MyMainerItem key={index} {...item} />
        })}
      </Flex>
    </CustomCard>
  )
}

export default MyMainers
