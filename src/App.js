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
import { RouterProvider, createHashRouter, Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import theme from "./chakra"

import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import Layout from "./components/Layout"
import Home from "./pages/home"
import User from "./pages/user"
import Mainers from "./pages/mainers"
import Collecting from "./pages/collecting"
import ProtectedRoute from "./components/ProtectedRoute"
import { COLLECTING_PAGE, MAINERS_PAGE, USER_PAGE } from "./constants"
import { originalMessages } from "./data"

function App() {
  const isLogged = useSelector(state => state.user.isLogged)

  const router = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: `/${USER_PAGE}`,
          element: (
            <ProtectedRoute isLogged={isLogged}>
              <User />
            </ProtectedRoute>
          )
        },
        {
          path: `/${MAINERS_PAGE}`,
          element: (
            <ProtectedRoute isLogged={isLogged}>
              <Mainers />
            </ProtectedRoute>
          )
        },
        {
          path: `/${COLLECTING_PAGE}`,
          element: (
            <ProtectedRoute isLogged={isLogged}>
              <Collecting />
            </ProtectedRoute>
          )
        }
      ]
    },
    {
      path: "*",
      element: <Navigate to={"/"} />
    }
  ])

  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  )
}

export default App
