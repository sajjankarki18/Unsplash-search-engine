import React, { Component } from 'react'
import Loading from './Loading.gif.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={Loading} alt="could not be displayed" />
      </div>
    )
  }
}

export default Spinner
