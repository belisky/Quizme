import React,{useState,useContext} from 'react'
import QuestionCard from '../QuestionCard/QuestionCard'
import { QuizContext } from '../../Helpers/Contexts';
import Button from '../Button/Button'

const Quiz = () => {
    const { setQuizState}=useContext(QuizContext);
    const finish=()=>{setQuizState("endscreen")}
   
    const [questions,setQuestions]=useState(QuestionsBank);
    return (
        <div className="Quiz">
            {questions.map((question,index)=>{
                return <QuestionCard question={question} key={index} />
            })}
        <Button onClick={finish} label="Finish"/>
         </div>
    )
}
  
const QuestionsBank = [
    {
        question:"What is my name",
        answer:"Nobel",
        optionA:"Kwesi",
        optionB:"Nobel",
        optionC:"Amina",
        optionD:"Kosi"
    },
    {
        question:"which school did i attend?",
        answer:"Knust",
        optionA:"Legon",
        optionB:"Knust",
        optionC:"Winneba",
        optionD:"Uenr"
    }
]

export default Quiz
