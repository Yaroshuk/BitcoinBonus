import React from "react"
import { Flex } from "@chakra-ui/react"

import TopMainersItem from "../TopMainersItem"

const list = [
  {
    img: "./img/avatars/avatar_1.jpeg",
    nickname: "Wade Warren",
    link: "WWarenW",
    sum: "98 336.00"
  },
  {
    img: "./img/avatars/avatar_2.jpeg",
    nickname: "Jack",
    link: "Jack_22",
    sum: "66 113.00"
  },
  {
    img: "./img/avatars/avatar_3.jpeg",
    nickname: "Masterioo",
    link: "Masterioo",
    sum: "56 870.00"
  },
  {
    img: "./img/avatars/avatar_4.jpeg",
    nickname: "Robert Fox",
    link: "fox_robe",
    sum: "55 336.00"
  }
]

const TopMainersList = () => {
  return (
    <Flex flexDirection={"column"} gap={"24px"}>
      {list.map((item, index) => (
        <TopMainersItem
          key={`${item.link}`}
          img={item.img}
          nickname={item.nickname}
          link={item.link}
          sum={item.sum}
          place={index + 1}
        />
      ))}
    </Flex>
  )
}

export default TopMainersList
