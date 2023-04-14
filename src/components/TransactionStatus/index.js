import { Flex, Image, Text } from "@chakra-ui/react"
import React from "react"

const TransactionsStatus = ({ status, ...props }) => {
  return (
    <Flex
      minH={"63px"}
      width={"100%"}
      maxW={"fit-content"}
      borderRadius={"15px"}
      border={"2px solid #EB5757"}
      alignItems={"center"}
      justifyContent={"flex-start"}
      gap={"12px"}
      padding={"0 16px"}
      {...props}
    >
      <Image src="./img/time-loading.svg" h={"48px"} w={"auto"} />
      <Flex flexDir={"column"}>
        <Text fontSize={"16px"}>Transaction status:</Text>
        <Text fontSize={"18px"} color={"#EB5757"}>
          {" "}
          {status ?? "Waiting for manual sending!"}
        </Text>
      </Flex>
    </Flex>
  )
}

export default TransactionsStatus
