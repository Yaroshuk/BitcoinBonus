import { ColorModeScript, ChakraProvider } from "@chakra-ui/react"
import React, { StrictMode } from "react"
import * as ReactDOM from "react-dom/client"
import App from "./App"
import {
  createBrowserRouter,
  RouterProvider,
  createHashRouter,
  HashRouter,
  Route,
  Navigate,
  Navigator
} from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store/store"

import theme from "./chakra"
import Layout from "./components/Layout"
import Home from "./pages/home"
import User from "./pages/user"
import Mainers from "./pages/mainers"
import Collecting from "./pages/collecting"
import ProtectedRoute from "./components/ProtectedRoute"

const container = document.getElementById("root")
const root = ReactDOM.createRoot(container)

root.render(
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </Provider>
)

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://cra.link/PWA
// serviceWorker.unregister();

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
