import moment from "moment"
import {
  Text,
  Flex,
  Box,
  Icon,
  FormControl,
  FormLabel,
  Input,
  Select
} from "@chakra-ui/react"
import React, { useState, useEffect, useCallback } from "react"
import { useTimer } from "react-timer-hook"
import ChatCard from "../../ChatCard"
import ManagerChatWaiting from "../ManagerChatWaiting"
import { useDispatch, useSelector } from "react-redux"
import { useManagerChar } from "../../../utils/chat"
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai"
import { thousandsFormatter } from "../../../utils"

const CommissionForm = ({
  nameValue,
  emailValue,
  lastNameValue,
  onNameChange,
  onEmailChange,
  onLastNameChange,
  ...props
}) => {
  const balance = useSelector(state => state.user.balance)

  return (
    <Box {...props}>
      <FormControl>
        <FormLabel
          pl={"16px"}
          color={"brand.600"}
          fontSize={"sm"}
          fontWeight={"500"}
        >
          Your full name
        </FormLabel>
        <Input
          minH={{ base: "58px", sm: "72px" }}
          size="lg"
          background={"#F0ECF5"}
          mb={"16px"}
          onChange={onNameChange}
          value={nameValue}
        />
      </FormControl>

      <FormControl>
        <FormLabel
          pl={"16px"}
          color={"brand.600"}
          fontSize={"sm"}
          fontWeight={"500"}
        >
          Card/wallet number*
        </FormLabel>
        <Input
          minH={{ base: "58px", sm: "72px" }}
          size="lg"
          background={"#F0ECF5"}
          mb={"16px"}
          onChange={onLastNameChange}
          value={lastNameValue}
        />
      </FormControl>

      <FormControl>
        <FormLabel
          pl={"16px"}
          color={"brand.600"}
          fontSize={"sm"}
          fontWeight={"500"}
        >
          E-mail address
        </FormLabel>
        <Input
          minH={{ base: "58px", sm: "72px" }}
          size="lg"
          background={"#F0ECF5"}
          mb={"16px"}
          onChange={onEmailChange}
          value={emailValue}
        />
      </FormControl>
    </Box>
  )
}

export default CommissionForm
