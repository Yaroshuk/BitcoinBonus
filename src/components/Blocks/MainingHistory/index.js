import React from "react"
import { Flex, Text, Grid } from "@chakra-ui/react"
import { CalendarIcon } from "@chakra-ui/icons"
import { useSelector } from "react-redux"
import CustomCard from "../../CustomCard"
import moment from "moment"
import MainingItem from "../../MainingItem"
import { usdToBtc } from "../../../utils"

const MainingHistory = () => {
  const currentDate = moment()

  const usd = useSelector(state => state.user.balance)
  const rate = useSelector(state => state.user.rate)

  const btc = usdToBtc(usd, rate)

  const percentages = [8, 6, 8, 14, 5, 13, 5, 3, 10, 8, 11, 9]

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
        {percentages.map((item, index) => {
          const date = currentDate.clone().subtract(index, "month")
          const money = ((usd * item) / 100).toFixed(2)
          const btc = usdToBtc(money, rate)

          return (
            <MainingItem
              key={index}
              date={date.format("MM.YY")}
              month={date.format("MMM")}
              money={money}
              btc={btc}
            />
          )
        })}
      </Grid>
    </CustomCard>
  )
}

export default MainingHistory
