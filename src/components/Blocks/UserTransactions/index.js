import React from "react"
import { Flex, Text, Icon } from "@chakra-ui/react"
import UserCard from "../../UserCard"
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai"
import { RxCheckCircled } from "react-icons/"

// TODO: add icon

const UserTransactions = ({ transactions, pos, neg }) => {
  return (
    <UserCard title={"Transactions"} subtitle={transactions} small>
      <Flex flexDir={"column"} gap={"8px"}>
        <Text
          color={"#21D233"}
          fontSize={"md"}
          fontWeight={"normal"}
          display={"flex"}
          alignItems={"center"}
          gap={"7px"}
        >
          <Icon as={AiOutlineCheckCircle} />
          {pos}
        </Text>
        <Text
          color={"#EF4242"}
          fontSize={"md"}
          fontWeight={"normal"}
          display={"flex"}
          alignItems={"center"}
          gap={"7px"}
        >
          <Icon as={AiOutlineCloseCircle} />
          {neg}
        </Text>
      </Flex>
      {/* <Icon
        as={AiFillFolder}
        position={"absolute"}
        color={"pink.100"}
        opacity={"0.3"}
        right={"10px"}
        top={"6px"}
        fontSize={"60px"}
      /> */}
    </UserCard>
  )
}

export default UserTransactions
