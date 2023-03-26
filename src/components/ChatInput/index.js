import {
  Input,
  InputGroup,
  InputRightElement,
  Button
} from "@chakra-ui/react"
import React, { useCallback } from "react"

const ChatInput = ({ value, onChange, onAddMessage }) => {
  const onSubmit = useCallback(
    e => {
      e.preventDefault()

      onAddMessage()
    },
    [onAddMessage]
  )

  return (
    <form onSubmit={onSubmit}>
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
          <Button size={"sm"} variant={"white"} type={"submit"}>send</Button>
        </InputRightElement>
      </InputGroup>
    </form>
  )
}

export default ChatInput
