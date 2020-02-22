import React, {Dispatch} from "react"
import { useState, useCallback } from "react"
import {Actions, ChangeGain} from "../reducer"

type Props = {
  gain: number;
  dispatch: Dispatch<Actions>;
}

export const Slidebar: React.FC = ({gain, dispatch}: Props) => {
  const [scale, setScale] = useState(Math.round(gain * 255))
  const handler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      event.persist()
      const newScale = Number(event.target.value)
      setScale(newScale)
      const newGain = newScale / 255.0
      dispatch({type: ChangeGain, payload: newGain})
    }, [event]
  )

  return(
    <label>Gain: <input 
      type="range" 
      min="0"
      max="255" 
      value={scale}
      onChange={handler}
      />[{gain}]</label>
  )
}
