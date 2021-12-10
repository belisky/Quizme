import React,{ useContext } from 'react'
import QuestionCard from '../QuestionCard/QuestionCard'
import { QuizContext } from '../../Helpers/Contexts';
import Button from '../Button/Button';
import './Quiz.css';
import decodeString from '../../Helpers/decodeString'
const Quiz = () => {
    let answer=[];    
    const {scheme,setScheme,setQuizState,questions,setChoices,total}=useContext(QuizContext);
    let choice=new Array(Number(total));    
    const finish=()=>{       
        setScheme([...scheme,...answer]);
        setChoices(choice);       
        setQuizState("endscreen");            
    }  
    
    return (
        <div className="Quiz">
            {questions.map((question,index)=>{
                answer.push(decodeString(question.correct_answer));
                return <QuestionCard question={question}
                 key={index} number={index} choice={choice}
                  />
            })}
        <Button onClick={ finish} label="Finish"/>
         </div>
    )
}
export default Quiz
