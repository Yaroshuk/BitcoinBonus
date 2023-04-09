import React, { useState, useEffect } from "react"
import { Flex, Image, Text } from "@chakra-ui/react"
import { getRandomInt } from "../../utils"

let timer = null

const CurrentOnline = ({ ...props }) => {
  const [online, setOnline] = useState(getRandomInt(290, 360))

  const startTimer = () => {
    timer = setTimeout(() => {
      setOnline(state => getRandomInt(state - 30, state + 30))
      startTimer()
    }, 7 * 1000)
  }

  useEffect(() => {
    startTimer()

    return () => {
      if (timer) {
        clearTimeout(timer)
      }
    }
  }, [])

  return (
    <Flex
      px={{ base: 3, sm: 4 }}
      borderRadius="sm"
      bg="white"
      gap="8px"
      alignItems="center"
      h={{ base: "44px", sm: "54px" }}
      {...props}
    >
      <Image
        src="./img/icons/indicator-online.svg"
        h={{ base: "38px", sm: "100%" }}
      />
      <Text
        color={"brand.600"}
        fontSize={{ base: "14px", sm: "18px" }}
        fontWeight="bold"
      >
        {`${online} now online`}
      </Text>
    </Flex>
  )
}

export default CurrentOnline
