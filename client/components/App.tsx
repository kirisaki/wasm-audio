import * as React from 'react'
import { Slidebar } from './Slidebar'
import { Switch } from './Switch'

export class App extends React.Component<{}, {}> {
  render() {
    return (
      <main>
        <Slidebar />
        <Switch />
      </main>
    )
  }
}
