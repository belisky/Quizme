import React, {useState} from 'react'
 
import {QuizContext } from './Helpers/Contexts';
import { MainMenu,Quiz,EndScreen } from './Components';
import './App.css';

function App() {
  const [quizState,setQuizState]=useState("menu");
  const [score,setScore]=useState(0);
  const [questions,setQuestions]=useState([]);

  return (
    <div className="App">
      <div className="title">
        <h1 >Quizme</h1>
        <p>Take a quiz on our diverse set of topics currated just for you.</p>
      </div> <QuizContext.Provider value={{quizState,setQuizState,score,setScore,questions,setQuestions}}>
        {quizState==="menu" && <MainMenu/>}
        {quizState==="quiz" && <Quiz/>}
        {quizState==="endscreen" && <EndScreen/>}
      </QuizContext.Provider>
    </div>

    
  );
}

export default App;
