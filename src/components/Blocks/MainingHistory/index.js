import React from "react"
import { Flex, Text, Grid } from "@chakra-ui/react"
import { CalendarIcon } from "@chakra-ui/icons"
import { useSelector } from "react-redux"
import CustomCard from "../../CustomCard"
import moment from "moment"
import MainingItem from "../../MainingItem"
import { usdToBtc } from "../../../utils"

const MainingHistory = () => {
  const currentDate = moment() // TODO: data from store
  // TODO: money from store

  const usd = useSelector(state => state.user.balance)
  const rate = useSelector(state => state.rate)

  const btc = usdToBtc(usd, rate)

  return (
    <CustomCard
      title={"Your maining history"}
      rightBlock={
        <Flex
          gap={"8px"}
          color={"#D3C2E9"}
          fontSize={"20px"}
          fontWeight={"semibold"}
          alignItems={"center"}
        >
          <CalendarIcon />
          <Text>Last 12 month</Text>
        </Flex>
      }
      flipHeader
    >
      <Grid
        gridTemplateColumns={{ base: "1fr", sm: "1fr 1fr", lg: "1fr 1fr 1fr" }}
        rowGap={"30px"}
        columnGap={"30px"}
      >
        {new Array(9).fill(0).map((item, index) => {
          const date = currentDate.clone().subtract(index, "month")

          return (
            <MainingItem
              key={index}
              date={date.format("MM.YY")}
              month={date.format("MMM")}
              money={"12 344"}
              btc={"0.22455"}
            />
          )
        })}
      </Grid>
    </CustomCard>
  )
}

export default MainingHistory
