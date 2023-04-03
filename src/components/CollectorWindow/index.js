import React from "react"
import { Box } from "@chakra-ui/react"
import CollectorItem from "../CollectorItem"

const items = [
  [
    {
      wallet: "8wrz3pVyc46g6oSw7r2x6YgcDeJ5J8zx",
      sumBtc: "0.000002",
      sumUsd: 0.06,
      status: true
    },
    {
      wallet: "zwtroIY7yGhMehJjMII8uonEhvly0P",
      sumBtc: "0.000003",
      sumUsd: 0.09,
      status: true
    },
    {
      wallet: "LeI2Q3TQHaPmnXBMLaYiYX3tynfosCP",
      sumBtc: "0.000004",
      sumUsd: 0.12,
      status: true
    },
    {
      wallet: "hyU8ZLcxfhFXOFA1bHovXMhhVpQtxyD",
      sumBtc: "0.000003",
      sumUsd: 0.09,
      status: false
    },
    {
      wallet: "lNYat2OmIseRc2s5vDvi6BQitkX",
      sumBtc: "0.000005",
      sumUsd: 0.15,
      status: true
    },
    {
      wallet: "YavDU0r0wJMWdCgvMHsqqZyE4NrcCLX1H",
      sumBtc: "0.000002",
      sumUsd: 0.06,
      status: false
    },
    {
      wallet: "uL7851cwzDzHhBt00xACDw4hijsfO",
      sumBtc: "0.000005",
      sumUsd: 0.15,
      status: true
    },
    {
      wallet: "TaqB6PC6sws8lgV51MehKpCTXQJoLk4tsY",
      sumBtc: "0.000002",
      sumUsd: 0.06,
      status: true
    },
    {
      wallet: "yerCxgJerhpddDyM1JGdFr4rsLcSviHCk0",
      sumBtc: "0.000002",
      sumUsd: 0.06,
      status: true
    },
    {
      wallet: "oGNxVjtA5B10uYGyd1ycewTUWaJ5Rjf4",
      sumBtc: "0.000002",
      sumUsd: 0.06,
      status: false
    }
  ]
]

const CollectorWindow = () => {
  return (
    <Box>
      dfdfdf
      {items.map((item, index) => {
        return <CollectorItem {...item} key={index} />
      })}
    </Box>
  )
}

export default CollectorWindow
