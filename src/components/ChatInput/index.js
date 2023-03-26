import {
  Input,
  Box,
  InputGroup,
  InputRightElement,
  Button
} from "@chakra-ui/react"
import React from "react"

const ChatInput = ({ value, onChange, onAddMessage }) => {
  return (
    <InputGroup width={"100%"}>
      <Input
        size={"lg"}
        variant={"filled"}
        minH={{ base: "58px", sm: "72px" }}
        pr={"105px"}
        value={value ?? ""}
        onChange={event => onChange(event.target.value)}
      />
      <InputRightElement height={"100%"} pr={"55px"}>
        <Button size={"sm"} onClick={onAddMessage} />
      </InputRightElement>
    </InputGroup>
  )
}

export default ChatInput
