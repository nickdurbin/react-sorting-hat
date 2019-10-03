import React, { Component } from 'react';
import { data } from '../data';

export default class QuestionForm extends Component {
  render() {
    return (
      <form className='questionForm'>
        <input 
        className='input'
        type="text" 
        name="questions" 
        placeholder="Answer..." />
      </form>
    )
  }
}