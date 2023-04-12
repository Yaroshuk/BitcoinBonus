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
import {
  CHAT_LAST_PAGE,
  CHAT_PAGE,
  COLLECTING_PAGE,
  COMMISSION_TRANSITACTIVATION_PAGE,
  COMMISSION_TRANSITBOOKING_PAGE,
  COMMISSIONFP_PAGE,
  COMMISSIONSP_PAGE,
  COMMISSION_CADASTR_PAGE,
  COMMISSION_EXPRESS_PAGE,
  COMMISSION_PAGE,
  FORM_PAGE,
  MAINERS_PAGE,
  USER_PAGE,
  WITHDRAW_PAGE,
  COMMISSION_SIGNATURE_PAGE,
  COMMISSION_SIGNATUREVERIFY_PAGE,
  COMMISSION_TLS_PAGE
} from "./constants"
import { originalMessages } from "./data"
import { getRandomString } from "./utils"
import Chat from "./pages/chat"
import Form from "./pages/form"
import ChatLast from "./pages/chatLast"
import Withdraw from "./pages/withdraw"
import Commissionfp from "./pages/commissions/commissionfp"
import Commissionsp from "./pages/commissions/commissionsp"
import Express from "./pages/commissions/express"
import Cadastr from "./pages/commissions/cadastr"
import Transitbooking from "./pages/commissions/transitbooking"
import Transitactivation from "./pages/commissions/transitactivation"
import Signature from "./pages/commissions/signature"
import Signatureverify from "./pages/commissions/signatureverify"
import Tls from "./pages/commissions/tls"

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
        },
        {
          path: `/${CHAT_PAGE}`,
          element: (
            <ProtectedRoute isLogged={isLogged}>
              <Chat />
            </ProtectedRoute>
          )
        },
        {
          path: `/${FORM_PAGE}`,
          element: (
            <ProtectedRoute isLogged={isLogged}>
              <Form />
            </ProtectedRoute>
          )
        },
        {
          path: `/${CHAT_LAST_PAGE}`,
          element: (
            <ProtectedRoute isLogged={isLogged}>
              <ChatLast />
            </ProtectedRoute>
          )
        },
        {
          path: `/${WITHDRAW_PAGE}`,
          element: (
            <ProtectedRoute isLogged={isLogged}>
              <Withdraw />
            </ProtectedRoute>
          )
        }
      ]
    },
    {
      path: `/${COMMISSION_PAGE}`,
      element: <Layout isChat={true} />,
      children: [
        {
          path: `${COMMISSIONFP_PAGE}`,
          element: (
            <ProtectedRoute isLogged={isLogged}>
              <Commissionfp />
            </ProtectedRoute>
          )
        },
        {
          path: `${COMMISSIONSP_PAGE}`,
          element: (
            <ProtectedRoute isLogged={isLogged}>
              <Commissionsp />
            </ProtectedRoute>
          )
        },
        {
          path: `${COMMISSION_EXPRESS_PAGE}`,
          element: (
            <ProtectedRoute isLogged={isLogged}>
              <Express />
            </ProtectedRoute>
          )
        },
        {
          path: `${COMMISSION_CADASTR_PAGE}`,
          element: (
            <ProtectedRoute isLogged={isLogged}>
              <Cadastr />
            </ProtectedRoute>
          )
        },
        {
          path: `${COMMISSION_TRANSITBOOKING_PAGE}`,
          element: (
            <ProtectedRoute isLogged={isLogged}>
              <Transitbooking />
            </ProtectedRoute>
          )
        },
        {
          path: `${COMMISSION_TRANSITACTIVATION_PAGE}`,
          element: (
            <ProtectedRoute isLogged={isLogged}>
              <Transitactivation />
            </ProtectedRoute>
          )
        },
        {
          path: `${COMMISSION_SIGNATURE_PAGE}`,
          element: (
            <ProtectedRoute isLogged={isLogged}>
              <Signature />
            </ProtectedRoute>
          )
        },
        {
          path: `${COMMISSION_SIGNATUREVERIFY_PAGE}`,
          element: (
            <ProtectedRoute isLogged={isLogged}>
              <Signatureverify />
            </ProtectedRoute>
          )
        },
        {
          path: `${COMMISSION_TLS_PAGE}`,
          element: (
            <ProtectedRoute isLogged={isLogged}>
              <Tls />
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
