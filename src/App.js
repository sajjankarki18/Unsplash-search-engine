import React, { Component } from 'react'
import Searchcomponents from './components/Searchcomponents'
import Navbar from './components/Navbar'
export class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Searchcomponents pageSize={9}/>
      </div>
    )
  }
}

export default App
