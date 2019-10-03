import React, { Component } from 'react';
import QuestionForm from './components/QuestionForm';
import HouseEmblem from './components/HouseEmblem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HouseEmblem />
        <QuestionForm />
      </div>
    );
  }
}

export default App;