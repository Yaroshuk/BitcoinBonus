import { useState, useCallback, useEffect, useRef, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getRandomInt } from "./utils"
import { addMessage, setWriting } from "../store/slices/managerChat"
import moment from "moment"
import { useTimer } from "react-timer-hook"

const nickname = "Amelia"

export function useManagerChar(source = []) {
  const [timer, setTimer] = useState(null)
  const [isStarted, setIsStarted] = useState(false)
  const dispatch = useDispatch()
  const messages = useSelector(state => state.managerChat.messages)

  const messagesRef = useRef(messages)

  const memoMessages = useMemo(() => messages, [messages])

  const pushMessage = function (msg) {
    const messages = messagesRef.current
    if (messages.length >= source.length) {
      clearTimeout(timer)
      setTimer(null)
      dispatch(setWriting(false))
      return
    }

    const message = source[messages.length]

    dispatch(
      addMessage({
        ...message,
        author: nickname,
        time: moment().format("HH:mm")
      })
    )

    dispatch(setWriting(false))

    setTimer(setTimeout(() => hanleTimer(), getRandomInt(1, 3) * 1000))
  }

  const hanleTimer = () => {
    dispatch(setWriting(nickname))

    setTimeout(() => pushMessage(), getRandomInt(5, 8) * 100)
  }

  useEffect(() => {
    messagesRef.current = messages
  })

  useEffect(() => {
    if (timer || isStarted) return

    setIsStarted(true)

    setTimer(setTimeout(() => hanleTimer(), getRandomInt(4, 6) * 1000))

    return () => {
      clearTimeout(timer)
      setTimer(null)
    }
  }, [timer, isStarted])

  return {
    finished: false
  }
}
