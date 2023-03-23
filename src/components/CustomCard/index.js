import React from "react"
import { Card, CardBody, CardHeader, Heading, Box } from "@chakra-ui/react"

const CustomCard = ({ title, leftBlock, children, ...props }) => {
  return (
    <Card borderRadius={"lg"} boxShadow={"none"} {...props}>
      <CardHeader
        fontSize={{ base: "md", md: "lg" }}
        display={"flex"}
        justifyContent={"space-between"}
      >
        {title && <Heading size={{ base: "md", md: "lg" }}>{title}</Heading>}
        {leftBlock && <Box>{leftBlock}</Box>}
      </CardHeader>
      {children && <CardBody>{children}</CardBody>}
    </Card>
  )
}

export default CustomCard
