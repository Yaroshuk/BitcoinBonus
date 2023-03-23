import React from "react"
import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react"

const CustomCard = ({ title, children, ...props }) => {
  return (
    <Card borderRadius={"lg"} boxShadow={"none"} {...props}>
      {title && (
        <CardHeader>
          <Heading>{title}</Heading>
        </CardHeader>
      )}
      {children && <CardBody>{children}</CardBody>}
    </Card>
  )
}

export default CustomCard
