import React from "react"
import { Box, Text } from "@chakra-ui/react"

const Timeline = ({ points, ...props }) => {
  const getLeft = index => {
    const distance = 100 / (points.length - 1)

    return index * distance
  }

  return (
    <Box
      width={"100%"}
      height="24px"
      borderTop={"2px solid #EBE8EF"}
      px={"20px"}
      {...props}
    >
      <Box w={"100%"} h={"100%"} position={"relative"}>
        {points.map((item, index) => {
          return (
            <>
              <Box
                key={index}
                position={"absolute"}
                width={"2px"}
                height={"8px"}
                background={"#EBE8EF"}
                bottom={"100%"}
                left={`${getLeft(index)}%`}
              />
              <Text
                position={"absolute"}
                left={`${getLeft(index)}%`}
                sx={{ transform: "translate(-50%)" }}
                color={"#C8BFD3"}
                fontSize={"md"}
                fontWeight={"semibold"}
              >
                {item}
              </Text>
            </>
          )
        })}
      </Box>
    </Box>
  )
}

export default Timeline
