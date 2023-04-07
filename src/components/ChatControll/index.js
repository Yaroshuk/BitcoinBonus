import { Box, Button, Text } from "@chakra-ui/react"
import React, { useCallback } from "react"

const ChatControll = ({ buttons, onClick, ...props }) => {
  const clickHandler = useCallback(btn => {
    if (!onClick) return

    onClick(btn)
  })

  if (!buttons || !buttons?.length) {
    return <></>
  }

  return (
    <Box
      w={"100%"}
      padding={"15px"}
      border={"2px solid #FAFAFA"}
      borderRadius={"sm"}
      display={"flex"}
      gap={"40px"}
      justifyContent={"center"}
      flexWrap={"wrap"}
    >
      {buttons.map((item, index) => (
        <Button key={index} minW={"100px"} onClick={() => clickHandler(item)}>
          {item.label}
        </Button>
      ))}
    </Box>
  )
}

export default ChatControll
