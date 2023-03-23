import { Box } from "@chakra-ui/react"
import React from "react"
import { gradientCard } from "../../chakra"
import { BitcoinIcon } from "../Icons"

// TODO: fix styles
const BageBitcoin = ({ ...props }) => {
  return (
    <Box
      w={"130px"}
      h={"130px"}
      borderRadius={"100%"}
      boxShadow={
        "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 8px 16px #6B38D9, inset 0px -10px 20px #A18EFF, inset 0px -15px 20px rgba(255, 255, 255, 0.25), inset 0px -50px 50px #CCC5FF;"
      }
      position={"relative"}
      color={"brand.300"}
      opacity={"0.5"}
      {...props}
    >
      <BitcoinIcon
        position={"absolute"}
        fontSize={"72px"}
        left={"50%"}
        top={"50%"}
        sx={{
          transform: "translate(-50%, -50%) rotate(30deg)"
        }}
      />
    </Box>
  )
}

export default BageBitcoin
