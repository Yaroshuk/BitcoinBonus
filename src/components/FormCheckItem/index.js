import React from "react"
import { Box, Text, Image } from "@chakra-ui/react"

const FormCheckItem = ({ checked, label }) => {
  return (
    <Box display={"flex"} gap={"15px"} alignItems={"center"}>
      <Box
        width={{ base: "14px", sm: "16px" }}
        height={{ base: "14px", sm: "16px" }}
        borderRadius={"5px"}
        border={"1px solid"}
        borderColor={checked ? "#21D233" : "pink.100"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {checked ? <Image src="./img/check.svg" w={"80%"} /> : null}
      </Box>
      <Text>{label}</Text>
    </Box>
  )
}

export default FormCheckItem
