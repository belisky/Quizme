import React,{useContext} from 'react'
import { QuizContext } from '../../Helpers/Contexts'
import Button from '../Button/Button';
import './EndScreen.css'

const EndScreen = () => {
    const {setScore,score,setQuizState,total}=useContext(QuizContext);
    const restart=()=>{
        setScore(0);
        setQuizState("menu");
    }
    return (
        <div className="endpage">
            <div className="scores">
                <h1>Your Score</h1>
                <h2 className="score">{score}/{total}</h2>
            </div>
            <div>
                 <Button label="restart" onClick={restart}/>
            </div>
            
        </div>
    )
}

export default EndScreen
