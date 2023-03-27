import { Flex, Text } from "@chakra-ui/react"
import React from "react"
import { BitcoinIcon } from "../../Icons"
import UserCard from "../../UserCard"

const UserBalance = () => {
  const balance = "24 285.45" // TODO: connect data from store
  const date = "03.22 - 03.23"

  return (
    <UserCard
      colored={true}
      title={"Balance"}
      subtitle={`$${balance}`}
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
