import * as React from 'react'
import { useEffect, useReducer } from 'react'
import { Slidebar } from './Slidebar'
import { Switch } from './Switch'
import { reducer, initial, StoreOsc, SwitchPlaying } from '../reducer'

export const App = ({ wasm }) => {
  const [state, dispatch] = useReducer(reducer, initial)
  useEffect (() => {
    if(state.playing){
      if(state.osc){
        state.osc.set_gain(state.gain)
      } else {
        const osc = new wasm.Oscillator()
        osc.set_gain(state.gain)
        dispatch({type: StoreOsc, payload: osc})
      }
    } else {
      if(state.osc){
        state.osc.free()
        dispatch({type: StoreOsc, payload: null})
      }
    }
  }, [state.playing, state.gain])
  return (
    <main>
      <Slidebar gain={state.gain} dispatch={dispatch} />
      <Switch playing={state.playing} dispatch={dispatch} /><br />
      <a href="https://github.com/kirisaki/wasm-audio/tree/736ba4f66aaef6d7f441f61a8eb6d3156b578f98">
      The repository of this code is here✨
      </a>
    </main>
  )
}
