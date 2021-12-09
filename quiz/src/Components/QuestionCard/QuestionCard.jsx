import React,{useState,useContext,useEffect} from 'react'
import './QuestionCard.css'
import { QuizContext } from '../../Helpers/Contexts';
import Button from '../Button/Button'

const QuestionCard = ({question,number}) => {
    const {score,setScore,total}=useContext(QuizContext);

    const [option,setOption]=useState("");
    const choose=(variable)=> {
        setOption(variable);
        if(variable===question.correct_answer){
            setScore(score+ 1);
            console.log(score,decodedAnswer);
        }
        alert(decodedAnswer)
         
    }
    const decodeString=(str)=> {
        const textArea =document.createElement('textarea')
        textArea.innerHTML=str
        return textArea.value
    }
    const decodedQuestion=decodeString(question.question)
    const decodedAnswer=decodeString(question.correct_answer);
    let decodedOptions=[...question.incorrect_answers.map(a=>decodeString(a)),decodedAnswer]
    decodedOptions=decodedOptions.sort(()=>Math.random()- .5)
     
    return (
        <div className="card">
            <div className="card__number">
                <h1>{number+1}/{total}</h1>
            </div>
            <div className="question">
                <h5>{decodedQuestion}</h5>
            </div>
            <div className="options">
                <Button label={decodedOptions[0]} onClick={()=>choose(decodedOptions[0])}/>
                <Button label={decodedOptions[1]} onClick={()=>choose(decodedOptions[1])}/>
                <Button label={decodedOptions[2]} onClick={()=>choose(decodedOptions[2])}/>
                <Button label={decodedOptions[3]} onClick={()=>choose(decodedOptions[3])}/>
                
            </div>
            
        </div>
    )
}

export default QuestionCard
