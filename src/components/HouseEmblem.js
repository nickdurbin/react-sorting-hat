import React, { Component } from 'react';
import Huff from '../images/huff1.png'

export default class HouseEmblem extends Component {
  render() {
    return (
      <div className='emblemContainer'>
        <img className='emblem' src={Huff} alt='House Emblem' />
      </div>
    )
  }
}