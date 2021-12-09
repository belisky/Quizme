import React, {useState,useRef} from 'react'
 
import {QuizContext } from './Helpers/Contexts';
import { MainMenu,Quiz,EndScreen } from './Components';
import './App.css';

function App() {
  const [quizState,setQuizState]=useState("menu");
  const [score,setScore]=useState(0);
  const [questions,setQuestions]=useState([]);
  const [total,setTotal]=useState(0);

  return (
    <div className="App">
      <div className="title">
        <h1 >Quizme</h1>
        <p>Take a quiz on our diverse set of topics currated just for you.</p>
      </div> 
      <QuizContext.Provider value={{quizState,setQuizState,score,setScore,questions,setQuestions,setTotal,total}}>
        <div className="container">
          {quizState==="menu" && <MainMenu/>}
          {quizState==="quiz" && <Quiz/>}
          {quizState==="endscreen" && <EndScreen/>}
        </div>
      </QuizContext.Provider>
    </div>

    
  );
}

export default App;
