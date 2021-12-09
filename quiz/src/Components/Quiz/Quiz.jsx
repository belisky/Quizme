import React,{useState} from 'react'
import QuestionCard from '../QuestionCard/QuestionCard'

const Quiz = () => {
    const [questions,setQuestions]=useState(QuestionsBank);
    return (
        <div className="Quiz">
            {questions.map((question,index)=>{
                return <QuestionCard question={question} key={index} />
            })}
        </div>
    )
}
  
const QuestionsBank = [
    {
        question:"What is my name",
        answer:"Nobel",
        optionA:"Kwesi",
        optionB:"Kwame",
        optionC:"Amina",
        optionD:"Kosi"
    },
    {
        question:"which school did i attend?",
        answer:"Knust",
        optionA:"Legon",
        optionB:"UCC",
        optionC:"Winneba",
        optionD:"Uenr"
    }
]

export default Quiz
