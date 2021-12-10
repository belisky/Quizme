import React,{useContext,useState} from 'react'
import { QuizContext } from '../../Helpers/Contexts'
import Button from '../Button/Button';
import './EndScreen.css'

const EndScreen = () => {
    let localscore=0;
    const [review,setReview]=useState([])
    const {setScore,score,setQuizState,total,setTotal,scheme,choices,setScheme,setChoices}=useContext(QuizContext);
    const restart=()=>{
        setScore(0);
        setQuizState("menu");
        setScheme([]);
        setChoices([]);
        setTotal(0);
    }
    const close=()=> {
        document.getElementById("popup").style.display = "none";
    }

    
    for(let i=0;i<total;i++){
        if(scheme[i]===choices[i]){             
            localscore+=1;            
        } 
       if(i===total-1){   
    setScore(localscore)};
     }
     
  
  
   
    const details=()=>{
        let detail=[]
        
        for(let i=0;i<total;i++){
            detail.push(scheme[i]+'--'+choices[i])
        }
        document.getElementById("popup").style.display = "flex";
         return setReview(detail)
    }
    return (
        <div className="endpage">
            <div className="scores">
                <h1>Your Score</h1>
                <h2 className="score">{score}/{total}</h2>
            </div>
            <div>
                <Button label="Details" onClick={ details} />
                 <Button label="restart" onClick={restart}/>
            </div>
            <div className="pop-up" id="popup">
                <h2>Details</h2>
                <h4>Marking Scheme--Your choices</h4>
                     {
                         review.map((review,idx)=>{
                         return <p key={idx}>{review}</p>})
                     }
                <button onClick={close}>close</button>
            </div>
            
        </div>
    )
}

export default EndScreen
