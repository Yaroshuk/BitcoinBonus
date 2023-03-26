import React from "react"
import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Box,
  Flex
} from "@chakra-ui/react"

const CustomCard = ({
  title,
  subtitle,
  leftBlock,
  rightBlock,
  children,
  ...props
}) => {
  return (
    <Card borderRadius={"lg"} boxShadow={"none"} {...props}>
      <CardHeader
        fontSize={{ base: "md", md: "lg" }}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Box display={"flex"} alignItems={"center"}>
          {rightBlock && <Box>{rightBlock}</Box>}
          <Flex flexDir={"column"}>
            {title && (
              <Heading size={{ base: "md", md: "lg" }}>{title}</Heading>
            )}
            {subtitle && (
              <Heading size={{ base: "md", md: "lg" }} color={"#D3C2E9"}>
                {subtitle}
              </Heading>
            )}
          </Flex>
        </Box>
        {leftBlock && <Box>{leftBlock}</Box>}
      </CardHeader>
      {children && <CardBody>{children}</CardBody>}
    </Card>
  )
}

export default CustomCard
