import React from "react"
import {
  Card,
  CardBody,
  CardHeader,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  useMediaQuery,
  AccordionIcon,
  Box
} from "@chakra-ui/react"

const containerStyles = {
  borderRadius: { base: "10px", sm: "sm" },
  border: "none",
  boxShadow:
    "0px 6px 28px rgba(0, 0, 0, 0.05), inset 0px 1px 0px rgba(255, 255, 255, 0.25);",
  overflow: "hidden",
  mb: "32px"
}

const headerStyles = {
  p: { base: "4", sm: "6" },
  pr: { base: "8", sm: "6" },
  borderRadius: { base: "10px", sm: "sm" },
  borderBottomRadius: { base: "0", sm: "0" },
  boxShadow: "inset 0px 4.8996px 22.8648px rgba(0, 0, 0, 0.05);",
  fontSize: { base: "14px", sm: "18px" },
  color: "brand.600"
}

const bodyStyles = {
  p: { base: "4", sm: "6" },
  fontSize: { base: "13px", sm: "16px" }
}

const FaqItem = ({ title, body }) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)")

  if (isMobile) {
    return (
      <AccordionItem {...containerStyles}>
        <AccordionButton {...headerStyles} position="relative">
          {title}
          <Box
            width={"20px"}
            height={"20px"}
            position={"absolute"}
            right={"7px"}
            top={"7px"}
            border={"1px solid #D3C2E9"}
            color={"#D3C2E9"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <AccordionIcon />
          </Box>
        </AccordionButton>
        <AccordionPanel {...bodyStyles}>{body}</AccordionPanel>
      </AccordionItem>
    )
  }

  return (
    <Card {...containerStyles}>
      <CardHeader {...headerStyles}>{title}</CardHeader>
      <CardBody {...bodyStyles}>{body}</CardBody>
    </Card>
  )
}

export default FaqItem
