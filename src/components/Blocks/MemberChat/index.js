import React, { useCallback, useState } from "react"
import CustomCard from "../../CustomCard"
import { ReactComponent as ChatIcon } from "./chat.svg"
import ChatInput from "../../ChatInput"
import ChatWindow from "../ChatWindow"

const messagesTest = [
  {
    text: "Cras eget diam ac nunc suscipit pulvinar.",
    author: "Andy",
    time: "18:24"
  },
  {
    text: "Donec faucibus, elit vitae ultricies scelerisque, velit ligula vestibulum justo, eget congue justo ex in tellus. Quisque fermentum semper eros sed lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In hac habitasse platea dictumst. Nam vel fringilla mauris, ut fermentum erat.",
    author: "Jane",
    time: "18:42"
  },
  {
    text: "Donec faucibus, elit vitae ultricies scelerisque, velit ligula vestibulum justo, eget congue justo ex in tellus.",
    author: "Rob_13",
    time: "19:04"
  }
]

const MemberChat = () => {
  const [messages, setMessages] = useState(messagesTest)
  const [inputValue, setInputValue] = useState("")

  const handleInputChange = useCallback(
    value => {
      setInputValue(value)
    },
    [setInputValue]
  )

  const handleAddMessage = useCallback(() => {
    if (!inputValue) return

    setInputValue("")
    setMessages([
      ...messages,
      {
        text: inputValue,
        isUser: true,
        time: "11:11"
      }
    ])
  }, [setMessages, inputValue, messages])

  return (
    <CustomCard
      title={"Online chat"}
      subtitle={"of service member"}
      leftBlock={<ChatIcon />}
    >
      <ChatWindow messages={messages} mb={"20px"} />
      <ChatInput value={inputValue} onChange={handleInputChange} onAddMessage={handleAddMessage} />
    </CustomCard>
  )
}

export default MemberChat
