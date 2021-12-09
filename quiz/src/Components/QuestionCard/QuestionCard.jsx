import React,{useState,useContext,useEffect} from 'react'
import './QuestionCard.css'
import { QuizContext } from '../../Helpers/Contexts';
import Button from '../Button/Button'

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
                <Button label={question.optionA} onClick={()=>choose(question.optionA)}/>
                <Button label={question.optionB} onClick={()=>choose(question.optionB)}/>
                <Button label={question.optionC} onClick={()=>choose(question.optionC)}/>
                <Button label={question.optionD} onClick={()=>choose(question.optionD)}/>
                
            </div>
            
        </div>
    )
}

export default QuestionCard
