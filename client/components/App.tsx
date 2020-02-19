import * as React from 'react'
import { Hello } from './Hello'

export class App extends React.Component<{}, {}> {
  render() {
    return (
      <main>
        <Hello compiler="TypeScript" framework="React" />
      </main>
    )
  }
}
