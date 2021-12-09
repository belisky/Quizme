import React,{useState} from 'react'
import './QuestionCard.css'

const QuestionCard = ({question}) => {
    const [option,setOption]=useState("");
    const choose=(variable)=> {
        setOption(variable);
        console.log(option);
    }
    return (
        <div className="card">
            <div className="card__number">
                <h1>#</h1>
            </div>
            <div className="question">
                <h1>{question.question}</h1>
            </div>
            <div className="options">
                <button Onclick={choose("A")} className="option">{question.optionA}</button>
                <button Onclick={choose("B")} className="option">{question.optionB}</button>
                <button Onclick={choose("C")} className="option">{question.optionC}</button>
                <button Onclick={choose("D")} className="option">{question.optionD}</button>
            </div>
            
        </div>
    )
}

export default QuestionCard
