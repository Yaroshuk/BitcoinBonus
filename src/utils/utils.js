import moment from "moment"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { useEffect } from "react"

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

export const usdToBtc = (usd, rate) => (usd / rate).toFixed(6)

export const btcToUsd = (btc, rate) => (btc * rate).toFixed(2)
