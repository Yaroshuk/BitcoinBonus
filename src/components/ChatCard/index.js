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

const ChatCard = ({
  title,
  subtitle,
  leftBlock,
  rightBlock,
  children,
  flipHeader,
  bodyPadding,
  bodyStyles,
  ...props
}) => {
  return (
    <Card
      borderRadius={{ base: "0", sm: "lg" }}
      boxShadow={"none"}
      minH={{ base: "calc(100vh - 110px)", sm: "640px" }}
      {...props}
    >
      {title ||
        (subtitle && (
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
              {leftBlock && <Box>{leftBlock}</Box>}
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
            {rightBlock && (
              <Box width={flipHeader && { base: "100%", sm: "auto" }}>
                {rightBlock}
              </Box>
            )}
          </CardHeader>
        ))}
      {children && (
        <CardBody
          {...(bodyPadding && { padding: bodyPadding })}
          {...bodyStyles}
        >
          {children}
        </CardBody>
      )}
    </Card>
  )
}

export default ChatCard
