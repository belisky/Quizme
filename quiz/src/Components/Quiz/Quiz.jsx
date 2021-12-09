import React,{ useContext} from 'react'
import QuestionCard from '../QuestionCard/QuestionCard'
import { QuizContext } from '../../Helpers/Contexts';
import Button from '../Button/Button';
import './Quiz.css'

const Quiz = () => {
    const { setQuizState,questions}=useContext(QuizContext);
    const finish=()=>{setQuizState("endscreen")}
   
    
    return (
        <div className="Quiz">
            {questions.map((question,index)=>{
                return <QuestionCard question={question} key={index} number={index} />
            })}
        <Button onClick={finish} label="Finish"/>
         </div>
    )
}
  
 

export default Quiz
