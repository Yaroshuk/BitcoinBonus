import moment from "moment"

export const currencyFormatter = new Intl.NumberFormat("en-Us")

export const currentMonth = (short = false) =>
  moment().format(short ? "MMM" : "MMMM")

export const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
}

export const getRandomTimeBefore = (min, max, unit = "minutes") => {
  return moment().subtract(getRandomInt(min, max), unit)
}
