import React from "react"
import { useState, useCallback } from "react"

export const Slidebar = () => {
  const [gain, setGain] = useState(0)
  const handler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      event.persist()
      setGain(Number(event.target.value))
    }, [event]
  )

  return(
    <label>Gain: <input 
      type="range" 
      min="0"
      max="255" 
      value={gain}
      onChange={handler}
      />[{gain}]</label>
  )
}
