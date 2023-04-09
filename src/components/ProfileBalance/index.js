import React from "react"
import { Flex, Image, Text } from "@chakra-ui/react"
import { useSelector } from "react-redux"

const ProfileBalance = ({ ...props }) => {
  const balance = useSelector(state => state.user.balance)

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
        src="./img/icons/indicator-balance.svg"
        h={{ base: "20px", sm: "24px" }}
      />
      <Text
        color={"brand.600"}
        fontSize={{ base: "14px", sm: "18px" }}
        fontWeight="bold"
        background={"linear-gradient(180deg, #7B2FD0 0%, #414DED 100%)"}
        sx={{
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}
      >
        {`$${balance}`}
      </Text>
    </Flex>
  )
}

export default ProfileBalance
