import { Button, Flex, Heading, Text, Image } from "@chakra-ui/react"
import React from "react"
import { gradientCard } from "../../../chakra"
import CustomCard from "../../CustomCard"

const CollectBonuses = () => {
  // TODO: style animation and btn hover

  return (
    <Flex
      fontSize={{ base: "md", md: "lg" }}
      padding={"20px"}
      bgGradient={gradientCard}
      borderRadius={"lg"}
      flexDir={"column"}
      gap={{ base: "13px", sm: "16px" }}
    >
      <Heading
        size={{ base: "md", md: "lg" }}
        color={"white"}
        fontWeight={"bold"}
      >
        Collect bonuses for the last 6 days
      </Heading>
      <Text
        color={"white"}
        fontSize={{ base: "13px", sm: "16px" }}
        fontWeight={"400"}
      >
        Simultaneously we had a problem with prisoner drunkenness that we
        couldn’t figure out. I mean , the guards searched cells multiple times
        to no avail.{" "}
      </Text>
      <Button
        variant={"collect"}
        size={"sm"}
        width={"fit-content"}
        marginTop={{ base: "10px", sm: "15px" }}
      >
        <Image src={"./img/icons/collect.svg"} marginRight={"12px"} />
        <Text
          background={"linear-gradient(180deg, #A367EF -6.82%, #811FFF 93.18%)"}
          sx={{
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent"
          }}
        >
          {" "}
          COLLECT BITCOIN BONUSES
        </Text>
      </Button>
    </Flex>
  )
}

export default CollectBonuses
