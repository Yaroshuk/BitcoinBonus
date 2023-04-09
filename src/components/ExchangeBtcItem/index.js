import React, { useCallback } from "react"
import {
  Flex,
  Image,
  Text,
  Icon,
  List,
  ListItem,
  ListIcon,
  Button
} from "@chakra-ui/react"
import { BiBitcoin, BiDollar, BiCheck } from "react-icons/bi"

const ExchangeBtcItem = ({ money, btc, link, ...props }) => {
  const clickHandler = useCallback(() => {
    window.location.href = link
  }, [])

  return (
    <Flex
      flexDir={{ base: "column", md: "row" }}
      justifyContent={{ md: "space-between" }}
      gap={{ md: "20px" }}
      background={"linear-gradient(180deg, #FFC111 0%, #FF8311 100%)"}
      borderRadius={"25px"}
      textAlign={{ base: "center", md: "left" }}
      padding={{ base: "30px 20px", md: "30px 40px" }}
      color={"white"}
      {...props}
    >
      <Flex
        flexDir={{ base: "column" }}
        alignItems={{ base: "center", md: "flex-start" }}
      >
        <Text fontSize={{ base: "20px", md: "24px" }} marginBottom={"25px"}>
          Make a cryptocurrency exchange to receive funds right now.
        </Text>
        <Text
          fontSize={{ base: "15px", md: "18px" }}
          fontStyle={"italic"}
          width={{ base: "60%", md: "100%" }}
        >
          Binance Exchange Fee - 0,25%. Cost of conversion 64$
        </Text>
        <Flex
          fontSize={{ base: "30px", lg: "36px" }}
          fontWeight={"bold"}
          flexDir={{ base: "column", md: "row" }}
          alignItems={"center"}
          margin={{ base: "30px auto", lg: "0" }}
          width={"100%"}
        >
          <Text lineHeight={"1"}>
            <Icon as={BiBitcoin} verticalAlign={"bottom"} />
            {btc}
          </Text>
          <Image
            src={"./img/arrows.svg"}
            width={{ base: "50%", md: "20%" }}
            maxW={"80px"}
            margin={{ base: "5px auto", md: "0 15px" }}
            transform={{ md: "rotate(90deg)" }}
          />
          <Text lineHeight={"1"}>
            <Icon as={BiDollar} verticalAlign={"bottom"} />
            {money}
          </Text>
        </Flex>
      </Flex>

      <Flex flexDir={"column"} gap={{ base: "30px" }} alignItems={"center"}>
        <List textAlign={"left"} width={{ md: "100%" }}>
          <ListItem marginBottom={"10px"}>
            <ListIcon as={BiCheck} />
            Click on the button &quot;Exchange bitcoins&quot;
          </ListItem>
          <ListItem marginBottom={"10px"}>
            <ListIcon as={BiCheck} />
            Pay your cryptocurrency exchange fee
          </ListItem>
          <ListItem marginBottom={"10px"}>
            <ListIcon as={BiCheck} />
            Get your funds in dollars
          </ListItem>
        </List>
        <Flex
          flexDir={{ base: "column", lg: "row-reverse" }}
          alignItems={"center"}
          gap={"30px"}
        >
          <Button
            variant={"third"}
            minW={{ base: "210px", md: "260px" }}
            borderRadius={"36px"}
            color={"#811FFF"}
            fontSize={{ base: "18px", lg: "20px" }}
            onClick={clickHandler}
          >
            EXCHANGE BTC TO USD
          </Button>
          <Image
            src="./img/secure-payment.png"
            w={"120px"}
            mixBlendMode={"multiply"}
          />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default ExchangeBtcItem
