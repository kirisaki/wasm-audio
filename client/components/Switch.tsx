import React, {Dispatch} from "react"
import { SwitchPlaying, Actions } from "../reducer"

type Props = {
  playing: boolean;
  dispatch: Dispatch<Actions>;
}

export const Switch: React.FC = ({playing, dispatch}: Props) => {
  return(
    <button onClick={() => dispatch({type: SwitchPlaying})}>{playing ? 'stop' : 'play'}</button>
  )
}
