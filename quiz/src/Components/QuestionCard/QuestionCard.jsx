import React,{useState,useContext,useEffect} from 'react'
import './QuestionCard.css'
import { QuizContext } from '../../Helpers/Contexts';

const QuestionCard = ({question}) => {
    const {score,setScore}=useContext(QuizContext);

    const [option,setOption]=useState("");
    const choose=(variable)=> {
        setOption(variable);
        if(variable===question.answer){
            setScore(score+ 1);
            console.log(score,option)
        }
         
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
                <button onClick={()=>choose(question.optionA)} className="option">{question.optionA}</button>
                <button onClick={()=>choose(question.optionB)} className="option">{question.optionB}</button>
                <button onClick={()=>choose(question.optionC)} className="option">{question.optionC}</button>
                <button onClick={()=>choose(question.optionD)} className="option">{question.optionD}</button>
            </div>
            
        </div>
    )
}

export default QuestionCard
