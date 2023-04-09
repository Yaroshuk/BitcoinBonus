import React from "react"
import { Box, Image } from "@chakra-ui/react"

const Banner = () => {
  return (
    <Box width={"100%"} cursor={"pointer"}>
      <Image src="./img/banner.png" w={"116%"} maxW={"116%"} />
    </Box>
  )
}

export default Banner
