import { Box, Grid } from "@chakra-ui/react"
import React from "react"
import UserBalance from "../UserBalance"
import UserCollected from "../UserCollected"
import UserTransactions from "../UserTransactions"

const UserBlock = () => {
  // TODO: get data from store
  return (
    <Box overflowX={"auto"} maxW={"100%"} width={"100%"}>
      <Grid gridTemplateColumns={"1fr 1fr 200px"} gap={"20px"}>
        <UserBalance />
        <UserCollected
          bitcoins={"0.9655"}
          money={"23665.00"}
          rate={"24 2181"}
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
