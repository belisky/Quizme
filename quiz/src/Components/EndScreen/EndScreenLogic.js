 
import {useContext ,useState,useRef} from 'react'
import { QuizContext } from '../../Helpers/Contexts'

const EndScreenLogic = () => {
    const scoreEl=useRef(0);
    let localscore=0;
    const [review,setReview]=useState([]);
    const {setScore,
        score,
        setQuizState,
        total,
        setTotal,
        scheme,
        choices,
        setScheme,
        setChoices}=useContext(QuizContext);

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
          
        scoreEl.current=localscore;
     } 
    const details=()=>{
        let detail=[]        
        for(let i=0;i<total;i++){
            detail.push(scheme[i]+'--'+choices[i])
        }
         setReview(detail);
        document.getElementById("popup").style.display = "flex";        
         
    }


    return  {close,details,restart,review,score,total,scoreEl}
}

export default EndScreenLogic
