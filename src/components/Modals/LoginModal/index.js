import React, { useCallback, useState } from "react"
import {
  Box,
  Text,
  Image,
  Flex,
  Button,
  OrderedList,
  ListItem
} from "@chakra-ui/react"
import { ArrowForwardIcon } from "@chakra-ui/icons"

import CustomModal from "../CustomModal"
import YourBalance from "../../Blocks/YourBalance"
import Timer from "../../Blocks/Timer"

const stepStyles = {
  py: { base: "20px", md: "40px" },
  px: { base: "14px", md: "30px" },
  paddingBottom: "32px",
  with: "100%",
  flexDir: { base: "column", md: "row" },
  gap: { md: "60px" },
  alignItems: { base: "center", md: "flex-start" }
}

const contentStyle = {
  flexDir: "column",
  jusstifyContent: "center",
  alignItems: { md: "flex-start" }
}

const textStyles = {
  textAlign: { base: "center", md: "left" }
}

const iconStyles = {
  marginBottom: "32px",
  width: { base: "100px", md: "120px" },
  marginLeft: { md: "20px" }
}

const hStyle = {
  fontWeight: "normal",
  fontSize: "2xl",
  textAlign: "center",
  marginBottom: "32px"
}

const btnStyles = {
  fontWeight: "bold",
  minW: { base: "190px", sm: "230px" },
  marginTop: "32px",
  alignSelf: { base: "center", md: "flex-start" }
}

const LoginModal = ({ isOpen }) => {
  const [step, setStep] = useState(1)
  const user = "user-id5673345" // TODO: username from store
  const sum = "24 281,80" // TODO: sum from store

  const handleNextStep = useCallback(() => {
    setStep(step => ++step)
  }, [setStep])

  const stepOne = () => (
    <Flex {...stepStyles}>
      <Image {...iconStyles} src={"/img/icons/warning-1.svg"} />
      <Flex {...contentStyle}>
        <Text {...hStyle}>{`Dear ${user}, welcome back`}</Text>
        <Text {...textStyles}>
          364 days ago, you registered on our platform for automatic cloud
          Bitcoin mining (collection) by living your device to our platform by
          IP address.
          <br /> <br />
          You were not active in your personal account, but the collection of
          cryptocurrency accrued automatically from your device.
        </Text>
        <Button
          {...btnStyles}
          rightIcon={<ArrowForwardIcon fontSize={"2xl"} />}
          onClick={handleNextStep}
        >
          NEXT
        </Button>
      </Flex>
    </Flex>
  )

  const stepTwo = () => (
    <Flex {...stepStyles}>
      <Image {...iconStyles} src={"/img/icons/warning-2.svg"} />
      <Flex {...contentStyle}>
        <Text {...hStyle}>{`Dear ${user},`}</Text>
        <Text {...textStyles}>
          {`
          During your absence you have made a sum of money with the help of
          cloud mining in the amount of 1.31 BTC. that at the domestic exchange
          rate at the end of the mining process on the March 16 is $ ${sum}`}
          <br />
          <br />
          {`Your account will be deleted across 1 day ! You have not been active
          on the site 364 days from the date of registration.`}
        </Text>
        <Button
          {...btnStyles}
          rightIcon={<ArrowForwardIcon fontSize={"2xl"} />}
          onClick={handleNextStep}
        >
          NEXT
        </Button>
      </Flex>
    </Flex>
  )

  const stepThree = () => (
    <Flex {...stepStyles}>
      <Image {...iconStyles} src={"/img/icons/warning-2.svg"} />
      <Flex {...contentStyle}>
        <Text {...hStyle}>{`Dear ${user},`}</Text>
        <OrderedList {...textStyles} textAlign={"left"}>
          <ListItem>
            Log in to your account by clicking the button below. If you do not
            remember your old password, then use the password that the system
            will automatically give you.
          </ListItem>
          <ListItem>
            In your personal account, contact your personal manager, they will
            prepare a payment for you.
          </ListItem>
          <ListItem>Request a withdrawal.</ListItem>
        </OrderedList>
        <Button {...btnStyles}>Log In</Button>
      </Flex>
    </Flex>
  )

  const stepComponent = {
    1: stepOne,
    2: stepTwo,
    3: stepThree,
    default: stepOne
  }

  return (
    <CustomModal isOpen={isOpen}>
      {(stepComponent[step] ?? stepComponent.default)?.()}
      <Box
        display={"flex"}
        flexDir={{ base: "column", sm: "row" }}
        gap={"10px"}
      >
        <Timer />
        <YourBalance />
      </Box>
    </CustomModal>
  )
}

export default LoginModal
