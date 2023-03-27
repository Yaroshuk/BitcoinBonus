import { Box, Text } from "@chakra-ui/react"
import React from "react"
import { gradientCard } from "../../chakra"

const UserCard = ({ title, subtitle, small, colored, children, ...props }) => {
  return (
    <Box
      background={"white"}
      bgGradient={colored && gradientCard}
      borderRadius={"lg"}
      py={"38px"}
      px={"30px"}
      position={"relative"}
      minW={small ? "200px" : "260px"}
      {...props}
    >
      {title && (
        <Text
          fontSize={small ? "18px" : "24px"}
          fontWeight={"bold"}
          mb={"10px"}
          color={"pink.100"}
        >
          {title}
        </Text>
      )}
      {subtitle && (
        <Text
          fontSize={"32px"}
          fontWeight={"bold"}
          mb={"15px"}
          color={small ? "black" : colored ? "white" : "#431480"}
        >
          {subtitle}
        </Text>
      )}
      {children}
    </Box>
  )
}

export default UserCard
