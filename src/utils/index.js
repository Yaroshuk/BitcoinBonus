import moment from "moment"

export const currencyFormatter = new Intl.NumberFormat("en-Us")

export const currentMonth = (short = false) =>
  moment().format(short ? "MMM" : "MMMM")
