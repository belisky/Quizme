import React,{ useContext} from 'react'
import './QuestionCard.css'
import { QuizContext } from '../../Helpers/Contexts';
import Button from '../Button/Button'
import decodeString from '../../Helpers/decodeString'

const QuestionCard = ({question,number,choice}) => {  
   const { total }=useContext(QuizContext);     
   const choose=(variable,number)=> {   
       choice.splice(number,1,variable);       
    }    
    const decodedQuestion=decodeString(question.question)
    const decodedAnswer=decodeString(question.correct_answer); 
    let decodedOptions=[...question.incorrect_answers.map(a=>decodeString(a)),decodedAnswer];
    decodedOptions.sort(()=>Math.random()-0.5);  
    
    return (
        <div className="card">
            <div className="card__number">
                <h1>{number+1}/{total}</h1>
            </div>
            <div className="question">
                <h5>{decodedQuestion}</h5>
            </div>
            <div className="options">
                <Button label={decodedOptions[0]} onClick={()=>choose(decodedOptions[0],number)}/>
                <Button label={decodedOptions[1]} onClick={()=>choose(decodedOptions[1],number)}/>
                <Button label={decodedOptions[2]} onClick={()=>choose(decodedOptions[2],number)}/>
                <Button label={decodedOptions[3]} onClick={()=>choose(decodedOptions[3],number)}/>                
            </div>            
        </div>
    )
}
export default QuestionCard
