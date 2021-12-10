import React,{ useContext,useState} from 'react'
import './QuestionCard.css'
import { QuizContext } from '../../Helpers/Contexts';
import Button from '../Button/Button'
import decodeString from '../../Helpers/decodeString'

const QuestionCard = ({question,number,choice }) => {  
    const [clicked1,setClicked1]=useState(false);
    const [clicked2,setClicked2]=useState(false);
    const [clicked3,setClicked3]=useState(false);
    const [clicked4,setClicked4]=useState(false);
  
   const { total }=useContext(QuizContext);     
   const choose=(variable,number,int)=> {  
        switch(Number(int)){
            case 1:
               setClicked1(!clicked1);
               break;
            case 2:
                setClicked2(!clicked2);
                break;
            case 3:
                setClicked3(!clicked3);
               break;
            case 4:
                 setClicked4(!clicked4);
                break;
            default:
                break;               
        } 
       choice.splice(number,1,variable);       
    }    
    const decodedQuestion=decodeString(question.question)
    const decodedAnswer=decodeString(question.correct_answer); 
    let decodedOptions=[...question.incorrect_answers.map(a=>decodeString(a)),decodedAnswer];
    decodedOptions.sort();  
    
    return (
        <div className="card">
            <div className="card__number">
                <h1>{number+1}/{total}</h1>
            </div>
            <div className="question">
                <h5>{decodedQuestion}</h5>
            </div>
            <div className="options">
                <Button clicked={clicked1} label={decodedOptions[0]} onClick={()=>choose(decodedOptions[0],number,1)}/>
                <Button clicked={clicked2} label={decodedOptions[1]} onClick={()=>choose(decodedOptions[1],number,2)}/>
                <Button clicked={clicked3} label={decodedOptions[2]} onClick={()=>choose(decodedOptions[2],number,3)}/>
                <Button clicked={clicked4} label={decodedOptions[3]} onClick={()=>choose(decodedOptions[3],number,4)}/>                
            </div>            
        </div>
    )
}
export default QuestionCard
