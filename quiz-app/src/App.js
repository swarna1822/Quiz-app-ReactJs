import { useState } from 'react';
import './App.css';
import QuestionsComponent from './components/QuestionsComponent';
import questions from './constants/questions.json'

function App() {
  const [currentQuestion, setCurrentQuestion]=useState(0)
  const handleNextQuestion = ()=>{
    setCurrentQuestion(currentQuestion +1)
  }
  return (
    <div className='app'>
       <h1>State Capitals Quiz</h1>
    {currentQuestion < questions.length && (
          <QuestionsComponent questions={questions[currentQuestion]} onAnswerClick={handleNextQuestion}/>

    )}
    </div>
   
  );
}

export default App;
