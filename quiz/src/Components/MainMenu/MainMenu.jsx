import React,{useContext,useRef,useState} from 'react'
import { QuizContext } from '../../Helpers/Contexts';
import './MainMenu.css';


const MainMenu = () => {
    const categoryEl = useRef();
    const amountEl = useRef();
    const [categories,setCategories]=useState([]);
    const { setQuizState}=useContext(QuizContext);
    const start=()=>{setQuizState("quiz")}
    return (
        <div className="Menu">
            <div>
                <form onSubmit={start}>
                    <label htmlFor="category">Categories</label>
                    <select id="category" ref={categoryEl}>
                        {
                            categories.map(category=>{
                                return <option value={category.id} key={category.id}>
                                    {category.name}
                                </option>})
                        }
                    </select>
                    <label htmlFor="amount">Number of Questions</label>
                    <input type="number" id="amount" min="1" step="1" defaultValue={10} ref={amountEl} />
                </form>
            </div>
            <button className="Menu__button"  >
                Start Quiz
            </button>
            
        </div>
    )
}

export default MainMenu
