import { Flex, Text } from "@chakra-ui/react"
import moment from "moment"
import React from "react"
import { useSelector } from "react-redux"
import { thousandsFormatter } from "../../../utils"
import { BitcoinIcon } from "../../Icons"
import UserCard from "../../UserCard"

const UserBalance = () => {
  const usd = useSelector(state => state.user.balance)
  const date = `${moment()
    .subtract(12, "months")
    .format("MM.YY")} - ${moment().format("MM.YY")}`

  return (
    <UserCard
      colored={true}
      title={"Balance"}
      subtitle={`$${thousandsFormatter(usd)}`}
      icon={<BitcoinIcon color={"white"} opacity={"0.6"} />}
    >
      <Flex flexDir={"column"} gap={"8px"}>
        <Text color={"#C8BFD3"} fontSize={"md"} fontWeight={"normal"}>
          {date}
        </Text>
        <Text color={"#C8BFD3"} fontSize={"md"} fontWeight={"normal"}>
          {"1 year"}
        </Text>
      </Flex>
      <BitcoinIcon
        position={"absolute"}
        color={"white"}
        opacity={"0.1"}
        right={"10px"}
        top={"10px"}
        fontSize={"110px"}
        transform={"rotate(30deg)"}
      />
    </UserCard>
  )
}

export default UserBalance
