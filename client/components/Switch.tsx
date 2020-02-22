import React from "react"
import { useState, useEffect } from "react"

export const Switch = () => {
  const [play, setPlay] = useState(false)
  const handler = () => {
    setPlay(!play)
  }

  useEffect (() => {
    if(play){
      console.log('nyaan')
    }
  })

  return(
    <button onClick={handler}>{play ? 'stop' : 'play'}</button>
  )
}
