import React, {useState} from 'react'
 
import {QuizContext } from './Helpers/Contexts';
import { MainMenu,Quiz,EndScreen } from './Components';
import './App.css';

function App() {
  const [quizState,setQuizState]=useState("menu");
  const [score,setScore]=useState(0);

  return (
    <div className="App">
      <div className="title">
        <h1 >Quiz App</h1>
      </div> <QuizContext.Provider value={{quizState,setQuizState,score,setScore}}>
        {quizState==="menu" && <MainMenu/>}
        {quizState==="quiz" && <Quiz/>}
        {quizState==="endscreen" && <EndScreen/>}
      </QuizContext.Provider>
    </div>

    
  );
}

export default App;
