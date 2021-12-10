 
import {useContext,useState} from 'react'
import { QuizContext } from '../../Helpers/Contexts'

const EndScreenLogic = () => {
    let localscore=0;
    const [review,setReview]=useState([])
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


    return  {close,details,restart,review,score,total}
}

export default EndScreenLogic
