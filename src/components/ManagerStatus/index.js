import React from "react"
import { Flex, Image, Text } from "@chakra-ui/react"

const ManagerStatus = ({ ...props }) => {
  return (
    <Flex minH={"96px"} width={"100%"} maxW={"360px"} gap={"12px"} {...props}>
      <Image src="./img/manager.png" h={"96px"} w={"auto"} />
      <Flex flexDir={"column"} justifyContent={"center"} gap={"6px"}>
        <Flex flexDirection={"column"} lineHeight={"1"}>
          <Text fontSize={"20px"} fontWeight={"700"}>
            Lauraine
          </Text>
          <Text fontSize={"16px"} fontWeight={"400"}>
            Manager
          </Text>
        </Flex>
        <Flex
          flexDir={"column"}
          fontSize={"16px"}
          color={"#8A7F98"}
          lineHeight={"1.2"}
        >
          <Text>
            Work experience: <b>3 years</b>
          </Text>
          <Text>
            Status:{" "}
            <Text color={"#21D233"} display={"inline"}>
              Online
            </Text>
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default ManagerStatus
