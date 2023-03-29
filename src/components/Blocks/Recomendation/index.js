import React, { useCallback } from "react"
import { Text, Image, Flex, Button } from "@chakra-ui/react"
import { ArrowForwardIcon } from "@chakra-ui/icons"
import CustomCard from "../../CustomCard"
import { useNavigate } from "react-router-dom"

// TODO: slow showing

const Recomendation = () => {
  const navigate = useNavigate()

  const handleGetPaid = useCallback(() => {
    navigate("/mainers")
  }, [navigate])

  return (
    <CustomCard
      title={<Text color={"white"}>Recomendation</Text>}
      background={"linear-gradient(180deg, #FFC111 0%, #FF8311 100%)"}
      leftBlock={
        <Image
          src="./img/icons/warning-white.svg"
          width={{ base: "35px", sm: "44px" }}
          marginRight={"14px"}
        />
      }
      bodyPadding={{ base: "0 20px 30px 20px" }}
    >
      <Flex
        paddingLeft={{ base: "49px", sm: "58px" }}
        flexDir={{ base: "column", md: "row" }}
        gap={{ base: "26px", md: "40px" }}
        alignItems={{ base: "flex-start" }}
      >
        <Text
          color={"white"}
          fontSize={{ base: "md", sm: "20px" }}
          fontWeight={"bold"}
        >
          Order your payout now. Bitcoin exchange rate brought to you +1457% the
          yield at the moment.
        </Text>
        <Button
          variant={"third"}
          minW={{ base: "210px", md: "260px" }}
          borderRadius={"36px"}
          rightIcon={<ArrowForwardIcon fontSize={"2xl"} color={"brand.300"} />}
          onClick={handleGetPaid}
        >
          <Text
            bgGradient={
              "linear-gradient(180deg, #A367EF -6.82%, #811FFF 93.18%)"
            }
            backgroundClip={"text"}
          >
            GET PAID NOW
          </Text>
        </Button>
      </Flex>
    </CustomCard>
  )
}

export default Recomendation
