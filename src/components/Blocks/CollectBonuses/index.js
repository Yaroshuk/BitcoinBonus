import { Button, Flex, Heading, Text, Image, keyframes } from "@chakra-ui/react"
import React, { useCallback } from "react"
import { gradientCard } from "../../../chakra"
import CustomCard from "../../CustomCard"
import { useNavigate } from "react-router-dom"

const btnAnimation = keyframes`
  from {
    background-position-y: 180%, 100%
  }

  to {
    background-position-y: -80%, 100%
  }
`

const CollectBonuses = () => {
  const navigate = useNavigate()

  const handleOpenCollectionPage = useCallback(() => {
    navigate("/collecting")
  }, [navigate])

  return (
    <Flex
      fontSize={{ base: "md", md: "lg" }}
      padding={"20px"}
      bgGradient={
        "linear-gradient(0deg, #414DED 0%, #7B2FD0 50%, #414DED 100%),linear-gradient(180deg, #414DED 0%, #414DED 100%)"
      }
      backgroundSize={"100% 200%, 100%"}
      backgroundRepeat={"no-repeat, repeat"}
      backgroundPositionY={"200%, 100%"}
      borderRadius={"lg"}
      flexDir={"column"}
      gap={{ base: "13px", sm: "16px" }}
      animation={`${btnAnimation} 3s 0s infinite`}
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
        data-group
        onClick={handleOpenCollectionPage}
      >
        <Image src={"./img/icons/collect.svg"} marginRight={"12px"} />
        <Text
          background={"linear-gradient(180deg, #A367EF -6.82%, #811FFF 93.18%)"}
          sx={{
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent"
          }}
          _groupHover={{
            background: "linear-gradient(0deg, #A367EF -6.82%, #811FFF 93.18%)",
            WebkitBackgroundClip: "text"
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
