import React, { useState } from "react"
import { Box, Text, Image, Flex, Button } from "@chakra-ui/react"
import { ArrowForwardIcon } from "@chakra-ui/icons"

import CustomModal from "../CustomModal"
import YourBalance from "../../Blocks/YourBalance"

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
  rightIcon: <ArrowForwardIcon fontSize={"2xl"} />,
  minW: { base: "190px", sm: "230px" },
  marginTop: "32px",
  alignSelf: { base: "center", md: "flex-start" }
}

const LoginModal = ({ isOpen }) => {
  const [step, useStep] = useState(0)
  const user = "user-id5673345" // TODO: username from store

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
        <Button {...btnStyles}>NEXT</Button>
      </Flex>
    </Flex>
  )

  return (
    <CustomModal isOpen={isOpen}>
      {stepOne()}
      <Box>
        <YourBalance />
      </Box>
    </CustomModal>
  )
}

export default LoginModal
