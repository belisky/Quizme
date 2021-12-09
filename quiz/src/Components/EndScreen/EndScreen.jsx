import React,{useContext} from 'react'
import { QuizContext } from '../../Helpers/Contexts'

const EndScreen = () => {
    const {setScore,score,setQuizState}=useContext(QuizContext);
    const restart=()=>{
        setScore(0);
        setQuizState("menu");
    }
    return (
        <div className="endpage">
            <div>
                <h1> hello {score}</h1>
            </div>
            <div>
                <button className={restart} onClick={restart}>Restart</button>
            </div>
            
        </div>
    )
}

export default EndScreen
