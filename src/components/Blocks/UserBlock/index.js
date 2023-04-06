import { Box, Grid } from "@chakra-ui/react"
import React from "react"
import { useSelector } from "react-redux"
import { thousandsFormatter, usdToBtc } from "../../../utils"
import UserBalance from "../UserBalance"
import UserCollected from "../UserCollected"
import UserTransactions from "../UserTransactions"

const UserBlock = () => {
  const usd = useSelector(state => state.user.balance)
  const rate = useSelector(state => state.user.rate)

  const btc = usdToBtc(usd, rate)

  console.log(usd, rate, btc)

  return (
    <Box overflowX={"auto"} maxW={"100%"} width={"100%"}>
      <Grid
        gridTemplateColumns={"1fr 1fr 200px"}
        gap={"20px"}
        marginBottom={"10px"}
      >
        <UserBalance />
        <UserCollected
          bitcoins={thousandsFormatter(btc)}
          money={thousandsFormatter(usd)}
          rate={thousandsFormatter(rate)}
        />
        <UserTransactions
          transactions={"192806"}
          pos={"102 800"}
          neg={"56 803"}
        />
      </Grid>
    </Box>
  )
}

export default UserBlock
