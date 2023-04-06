import React from "react"
import { Box, Image, Tooltip } from "@chakra-ui/react"
import { gradientCard } from "../../chakra"
import { thousandsFormatter } from "../../utils"

const BalanceChart = ({ balance }) => {
  return (
    <Box width={"100%"} position={"relative"}>
      <Image src="./img/balance-chart.svg" w={"100%"} />
      <Tooltip
        label={thousandsFormatter(balance)}
        bgGradient={gradientCard}
        bgColor={"brand.800"}
        padding={"8px"}
        borderRadius={"sm"}
        fontWeight={"bold"}
        fontSize={"20px"}
        hasArrow
        isOpen
      >
        <Box
          w={"22px"}
          h={"22px"}
          background={
            "linear-gradient(white, white) padding-box, linear-gradient(to top, #414DED, #7B2FD0) border-box;"
          }
          borderRadius={"100%"}
          position={"absolute"}
          left={"50%"}
          top={"51.5%"}
          border={"3px solid transparent"}
          sx={{ transform: "translate(-50%)" }}
        />
      </Tooltip>
    </Box>
  )
}

export default BalanceChart
