import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
         <div className="container-fluid">
                <a className="navbar-brand">SourceUnsplash</a>
                <svg stroke="currentColor" onClick={this.handleClick} style={{cursor: 'pointer'}} fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="text-2xl " height="40px" width="40px" xmlns="http://www.w3.org/2000/svg"><path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 13V2a6 6 0 1 1 0 12z"></path></svg>
         </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
