import * as React from 'react'
import { useEffect } from 'react'
import { Slidebar } from './Slidebar'
import { Switch } from './Switch'
import {Oscillator} from '../../pkg'

export const App = ({ wasm }) => {
  useEffect (() => {
    const osc = new wasm.Oscillator()
    osc.set_gain(0.02)
  })
  return (
    <main>
      <Slidebar />
      <Switch />
    </main>
  )
}
