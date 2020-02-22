import { Oscillator } from '../pkg'

export type State = {
  playing: boolean,
  gain: number,
  osc: Oscillator,
}

export const SwitchPlaying = Symbol("SwitchPlaying")
export const ChangeGain = Symbol("ChangeGain")
export const StoreOsc = Symbol("StoreOsc")

export const switchPlaying = () => ({
  type: SwitchPlaying,
})
export const changeGain= (payload: number) => ({
  type: ChangeGain,
  payload,
})
export const storeOsc = (payload: Oscillator | null) => ({
  type: StoreOsc,
  payload,
})
export type Actions = ReturnType<
  typeof switchPlaying |
  typeof changeGain |
  typeof storeOsc>

export const initial: State = {
  playing: false,
  gain: 0.2,
  osc: null,
}

export const reducer = (state: State | null, action: Actions): State => {
  if(!state) {
    return initial
  }

  switch (action.type) {
    case SwitchPlaying:
      if(state.playing) {
        return {...state, playing: false}
      } else {
        return {...state, playing: true}
      }
    case ChangeGain:
      let gain = action.payload
      if(gain > 1.0) {
        gain = 1.0
      } else if (gain < 0.0) {
        gain = 0.0
      }
      return {...state, gain: gain}
    case StoreOsc:
      if(action.payload){
        return {...state, osc: action.payload}
      } else {
        return {...state, osc: null}
      }
    default:
      throw new Error('Invalid action type')
  }
}

