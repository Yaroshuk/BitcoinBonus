import React from "react"
import {
  Avatar,
  Flex,
  AvatarBadge,
  Box,
  Text,
  Tag,
  color
} from "@chakra-ui/react"

const colors = {
  1: "#FFC111",
  2: "#000000",
  3: "#D98059",
  4: "#C8BFD3"
}
// TODO: implement random online
const TopMainersItem = ({ img, nickname, link, sum, place }) => {
  return (
    <Flex gap={"12px"} alignItems={"center"}>
      <Avatar
        width={{ base: "58px", sm: "72px" }}
        height={{ base: "58px", sm: "72px" }}
        src={img}
        name={nickname}
        display={{ base: "inline-block", sm: "none", md: "inline-block" }}
      >
        <AvatarBadge boxSize="1em" bg="green.500" />
      </Avatar>
      <Box>
        <Text
          fontSize={{ base: "14px", sm: "18px" }}
          fontWeight={"normal"}
          color={"brand.600"}
        >
          {nickname}
        </Text>
        <Text
          fontSize={{ base: "13px", sm: "16px" }}
          fontWeight={"semibold"}
          color={"#C8BFD3"}
        >
          {`@${link}`}
        </Text>
      </Box>
      <Tag
        borderRadius={"sm"}
        ml={"auto"}
        fontSize={"14px"}
        fontWeight={"bold"}
        color={"white"}
        padding={"9px"}
        width={"fit-content"}
        height={"fit-content"}
        background={place ? colors?.[place] ?? colors[4] : colors[4]}
      >{`$${sum}`}</Tag>
    </Flex>
  )
}

export default TopMainersItem
