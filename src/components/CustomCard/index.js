import React from "react"
import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Box,
  Flex
} from "@chakra-ui/react"

// TODO: fix max layout width

const CustomCard = ({
  title,
  subtitle,
  leftBlock,
  rightBlock,
  children,
  flipHeader,
  ...props
}) => {
  return (
    <Card borderRadius={"lg"} boxShadow={"none"} {...props}>
      <CardHeader
        fontSize={{ base: "md", md: "lg" }}
        display={"flex"}
        flexDir={flipHeader ? { base: "column", sm: "row" } : "row"}
        justifyContent={"space-between"}
        alignItems={
          flipHeader ? { base: "flex-start", sm: "center" } : "center"
        }
        gap={"10px"}
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
