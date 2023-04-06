import React from "react"
import { Box, Progress, Tooltip } from "@chakra-ui/react"
import { gradientCard } from "../../chakra"

const ProgressBar = ({ value = 10 }) => {
  // TODO: add shadow

  return (
    <Box padding={"70px 0 30px"} position={"relative"}>
      <Box
        bgGradient={gradientCard}
        bgColor={"brand.800"}
        padding={"4px 8px"}
        borderRadius={"sm"}
        fontWeight={"bold"}
        fontSize={"16px"}
        position={"absolute"}
        minW={"40px"}
        textAlign={"center"}
        color={"white"}
        left={`${value}%`}
        transform={"translateX(-50%)"}
        bottom={"75px"}
        _after={{
          content: "''",
          position: "absolute",
          top: "100%",
          left: "50%",
          transform: "translateX(-50%)",
          border: "10px solid transparent",
          borderTop: "10px solid #414DED"
        }}
      >
        {`${value.toFixed(2)}%`}
      </Box>
      <Progress
        value={value.toFixed(2)}
        background={"#f7f3fc"}
        borderRadius={"25px"}
        height={"26px"}
        padding={"3px"}
        sx={{
          "&>div": {
            background: "linear-gradient(180deg, #7B2FD0 0%, #414DED 100%)"
          }
        }}
      />
    </Box>
  )
}

export default ProgressBar
