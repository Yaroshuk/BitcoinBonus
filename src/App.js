import React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  extendTheme
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import Layout from "./components/Layout"

const colors = {
  brand: {
    100: "#BF6EFE", // BtnHover top
    200: "#A367EF", // Btn top
    300: "#8F37FF", // BtnHover bottom
    400: "#811FFF", // Btn bottom
    500: "#5C1FAB", // Logo light
    600: "#431480", // Logo
    800: "#7B2FD0",
    900: "#414DED"
  }
}

const breakpoints = {
  sm: 767,
  md: 959,
  lg: 1247
}

const radii = {
  sm: "12px",
  md: "15px",
  lg: "30px"
}

const theme = extendTheme({ colors, breakpoints, radii })

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <VStack spacing={8}>
          <Logo h="40vmin" pointerEvents="none" />
          <Text>
            Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
          </Text>
          <Link
            color="teal.500"
            href="https://chakra-ui.com"
            fontSize="2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Chakra
          </Link>
        </VStack>
      </Layout>
      {/* <Box textAlign="center" fontSize="xl"
      >
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>

            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack>
        </Grid>
      </Box> */}
    </ChakraProvider>
  )
}

export default App
