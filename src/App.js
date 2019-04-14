import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Question from './components/Question';
import quizQuestions from './api/quizQuestions';

constructor(props); {
  super(props);

  this.state = {
    counter: 0,
    questionId: 1,
    question: '',
    answerOptions: [],
    answer: '',
    answersCount: {
      nintendo: 0,
      microsoft: 0,
      sony: 0
    },
    result: ''
  };
}
class App extends Component {
  render() {
    return (
        <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>React Quiz</h2>
    </div>
    <Question content="What is your favourite food?" />
  </div>
    
    );
  }
}

export default App;