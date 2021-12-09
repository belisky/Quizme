import React,{useContext} from 'react'
import { QuizContext } from '../../Helpers/Contexts'
import Button from '../Button/Button';

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
                 <Button label="restart" onClick={()=>restart}/>
            </div>
            
        </div>
    )
}

export default EndScreen
