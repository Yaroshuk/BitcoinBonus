import { useState, useCallback, useEffect, useRef, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getRandomInt } from "./utils"
import { addMessage, setWriting } from "../store/slices/managerChat"
import moment from "moment"
import { useTimer } from "react-timer-hook"
import { setLoading } from "../store/slices/global"

const nickname = "Amelia"

export function useManagerChar(source = []) {
  const [timer, setTimer] = useState(null)
  const [leftMessages, setLeftMessages] = useState(0)
  const dispatch = useDispatch()
  const messages = useSelector(state => state.managerChat.messages)
  const balance = useSelector(state => state.user.balance)

  const messagesRef = useRef(messages)
  const leftMessagesRef = useRef(leftMessages)

  const pushMessage = function (msg) {
    const messages = messagesRef.current
    const leftMessages = leftMessagesRef.current

    console.log(source.length, leftMessages, source)
    if (source.length - leftMessages < 0 || !leftMessages) {
      clearTimeout(timer)
      setTimer(null)
      dispatch(setWriting(false))
      return
    }

    setLeftMessages(state => {
      return state - 1
    })
    const message = source?.[source.length - leftMessages]

    if (message?.balance) {
      message.text = String(message.text).replace("-balance-", balance)
    }

    if (message?.wait) {
      dispatch(setLoading(true))

      setTimeout(() => {
        dispatch(setLoading(false))
        sendMessageToStore(message)
      }, 5 * 1000)
    } else {
      sendMessageToStore(message)
    }
  }

  const sendMessageToStore = message => {
    dispatch(
      addMessage({
        ...message,
        author: nickname,
        time: moment().format("HH:mm")
      })
    )

    dispatch(setWriting(false))

    setTimer(setTimeout(() => hanleTimer(), getRandomInt(5, 7) * 1000))
  }

  const hanleTimer = () => {
    dispatch(setWriting(nickname))

    setTimeout(() => pushMessage(), getRandomInt(5, 8) * 100)
  }

  useEffect(() => {
    messagesRef.current = messages
    leftMessagesRef.current = leftMessages
  }, [messages, leftMessages])

  useEffect(() => {
    // if (timer) return
    setTimer(timer => {
      clearTimeout(timer)
      return null
    })

    if (!source || !source?.length) return

    setLeftMessages(source.length)

    setTimer(setTimeout(() => hanleTimer(), getRandomInt(10, 15) * 1000))

    return () => {
      clearTimeout(timer)
      setTimer(null)
    }
  }, [source])

  return {
    finished: false
  }
}
