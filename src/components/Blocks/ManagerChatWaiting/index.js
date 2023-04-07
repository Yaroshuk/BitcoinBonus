import { Box, Flex, Image, keyframes, Text, Icon } from "@chakra-ui/react"
import { HiOutlineChat } from "react-icons/hi"
import React from "react"
import ChatCard from "../../ChatCard"

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`
// TODO: fix icon
const ManagerChatWaiting = ({ sec = 0 }) => {
  return (
    <ChatCard>
      <Flex
        flexDir={"column"}
        alignItems={"center"}
        marginTop={{ base: "100px", sm: "60px" }}
      >
        <Box position={"relative"} width={{ base: "95%", sm: "60%" }}>
          <Image src="./img/withdraw.svg" w={"100%"} />
          <Image
            src="./img/loader.svg"
            position={"absolute"}
            width={"10%"}
            right={"30%"}
            top={"30%"}
            animation={`${spin} 2s linear infinite`}
          />
        </Box>
        <Text fontWeight={"normal"} fontSize={{ base: "20px", sm: "24px" }}>
          Don’t close the page!
        </Text>
        <Box
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
          mt={"40px"}
          maxW={"540px"}
          textAlign={"center"}
        >
          <Icon as={HiOutlineChat} fontSize={"48px"} />
          <Text fontSize={{ base: "20px", sm: "24px" }} fontWeight={"semibold"}>
            We contact the manager Amelia to process the withdrawal...
          </Text>
          <Text
            mt={"20px"}
            fontSize={{ base: "14px", sm: "16px" }}
            color={"pink.100"}
            fontWeight={"normal"}
          >{`Approximately until completion: ${sec} sec`}</Text>
        </Box>
      </Flex>
      <Image
        src="./img/secure-payment.png"
        w={"120px"}
        margin={{ base: "50px auto", sm: "60px 0 0" }}
      />
    </ChatCard>
  )
}

export default ManagerChatWaiting
