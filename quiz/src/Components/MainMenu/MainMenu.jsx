import React,{useContext} from 'react'
import { QuizContext } from '../../Helpers/Contexts';
import './MainMenu.css';


const MainMenu = () => {
    const { setQuizState}=useContext(QuizContext);
    const start=()=>{setQuizState("quiz")}
    return (
        <div className="Menu">
            <button className="Menu__button" onClick={start}>
                Start Quiz
            </button>
            
        </div>
    )
}

export default MainMenu
