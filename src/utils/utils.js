import moment from "moment"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useCallback, useEffect } from "react"
import { LAST_VISITED } from "../constants"
import { setLoading } from "../store/slices/global"

export const currencyFormatter = new Intl.NumberFormat("en-Us")

export const thousandsFormatter = (num, separator = " ") => {
  if (!num || !num?.toString) return " "
  const splitedNumber = num.toString().split(".")

  splitedNumber[0] = splitedNumber[0].replace(
    /\B(?=(\d{3})+(?!\d))/g,
    separator
  )

  return splitedNumber.join(".")
}

export const currentMonth = (short = false) =>
  moment().format(short ? "MMM" : "MMMM")

export const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
}

export const getRandomString = (length = 32) => {
  var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz"
  var stringLength = length
  var randomstring = ""
  for (var i = 0; i < stringLength; i++) {
    var rnum = Math.floor(Math.random() * chars.length)
    randomstring += chars[rnum]
  }

  return randomstring
}

export const getRandomTimeBefore = (min, max, unit = "minutes") => {
  return moment().subtract(getRandomInt(min, max), unit)
}

export const useProtectedRoute = (redirectRoute = "/") => {
  const isLogged = useSelector(state => state.user.isLogged)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLogged) {
      navigate(redirectRoute)
    }
  }, [isLogged])
}

export const useGoTo = () => {
  const navigate = useNavigate()
  return useCallback(
    path => {
      navigate(path)
      localStorage.setItem(LAST_VISITED, path)
    },
    [navigate]
  )
}

export const useLoading = () => {
  const dispatch = useDispatch()
  let timer = null

  useEffect(() => {
    dispatch(setLoading(true))

    timer = setTimeout(() => {
      dispatch(setLoading(false))
    }, getRandomInt(10, 20) * 100)

    return () => {
      dispatch(setLoading(false))
      clearTimeout(timer)
      timer = null
    }
  }, [])
}

export const usdToBtc = (usd, rate) => (usd / rate).toFixed(6)

export const btcToUsd = (btc, rate) => (btc * rate).toFixed(2)
