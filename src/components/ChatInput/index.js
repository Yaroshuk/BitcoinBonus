import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Text
} from "@chakra-ui/react"
import React, { useCallback } from "react"

const ChatInput = ({ value, onChange, disabled, onAddMessage, writing }) => {
  const onSubmit = useCallback(
    e => {
      e.preventDefault()

      onAddMessage()
    },
    [onAddMessage]
  )

  return (
    <form onSubmit={onSubmit} style={{ paddingTop: "40px", marginTop: "auto" }}>
      <InputGroup width={"100%"} position={"relative"}>
        {writing && (
          <Text
            position={"absolute"}
            top={"-35px"}
            left={"0px"}
            color={"pink.100"}
            fontWeight={"semibold"}
          >
            {`${writing} typing...`}
          </Text>
        )}
        <Input
          size={"lg"}
          variant={"filled"}
          minH={{ base: "58px", sm: "72px" }}
          pr={"105px"}
          value={value ?? ""}
          bg={"#F0ECF5"}
          _hover={{
            bg: "#F0ECF5"
          }}
          _focus={{
            bg: "linear-gradient(#F0ECF5, #F0ECF5) padding-box, linear-gradient(to top, #414DED, #7B2FD0) border-box;",
            border: "2px solid transparent"
          }}
          onChange={event => onChange(event.target.value)}
          isDisabled={disabled}
        />
        <InputRightElement height={"100%"} pr={"55px"}>
          <Button
            size={"sm"}
            variant={"white"}
            type={"submit"}
            isDisabled={disabled}
          >
            send
          </Button>
        </InputRightElement>
      </InputGroup>
    </form>
  )
}

export default ChatInput
