import React from "react"
import { Flex, Text, Icon } from "@chakra-ui/react"
import UserCard from "../../UserCard"
import { AiFillFolder } from "react-icons/ai"

const UserCollected = ({ bitcoins, money, rate }) => {
  return (
    <UserCard title={"Total collected"} subtitle={`${bitcoins} BTC`}>
      <Flex flexDir={"column"} gap={"8px"}>
        <Text color={"#C8BFD3"} fontSize={"md"} fontWeight={"normal"}>
          {`$${money}`}
        </Text>
        <Text color={"#C8BFD3"} fontSize={"md"} fontWeight={"normal"}>
          {`1 BTC = $${rate}`}
        </Text>
      </Flex>
      <Icon
        as={AiFillFolder}
        position={"absolute"}
        color={"pink.100"}
        opacity={"0.3"}
        right={"10px"}
        top={"6px"}
        fontSize={"60px"}
      />
    </UserCard>
  )
}

export default UserCollected
