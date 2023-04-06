import { Flex, Grid, GridItem, Text, Box } from "@chakra-ui/react"
import moment from "moment"
import React from "react"
import { thousandsFormatter } from "../../utils"

const MyMainerItem = ({ title, isWorking, time, ip, earned }) => {
  return (
    <Flex
      flexDirection={{ base: "column", lg: "row" }}
      alignItems={"center"}
      backgroundColor={{ base: "rgba(211, 194, 233, 0.1)", lg: "transparent" }}
      p={"16px"}
      gap={"10px"}
    >
      <Grid
        gridTemplateColumns={"1fr 35% 20%"}
        textAlign={"right"}
        width={"100%"}
        fontSize={{ base: "14px", sm: "16px" }}
        fontWeight={"normal"}
      >
        <GridItem
          textAlign={"left"}
          display={"flex"}
          alignItems={"center"}
          color={"#431480"}
        >
          <Box
            w={"12px"}
            h={"12px"}
            background={isWorking ? "#21D233" : "#FF5959"}
            borderRadius={"50px"}
            border={"2px solid #fff"}
            mr={"5px"}
          />
          {title}{" "}
          <Text display={ip ? { base: "none", sm: "inline" } : "none"}>
            {ip}
          </Text>
        </GridItem>
        <GridItem>{moment.utc(time).format("HH[h] MM[m] SS[s]")}</GridItem>
        <GridItem>{`$${thousandsFormatter(earned)}`}</GridItem>
      </Grid>
      <Box
        display={"flex"}
        justifyContent={{ base: "center", lg: "flex-end" }}
        width={{ base: "auto", md: "40%" }}
      >
        <GridItem
          padding={"7px 9px"}
          borderRadius={"9px"}
          fontSize={"18px"}
          fontWeight={"700"}
          color={"white"}
          background={isWorking ? "#21D233" : "#FF5959"}
          position={"relative"}
          boxShadow={`0 16px 10px -15px ${isWorking ? "#21D233" : "#FF5959"}`}
          whiteSpace={"nowrap"}
          width={"fit-content"}
        >
          {isWorking ? "Working now" : "Not working now"}
        </GridItem>
      </Box>
    </Flex>
  )
}

export default MyMainerItem
