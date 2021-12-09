import React,{useContext,useEffect,useRef,useState} from 'react'
import { QuizContext } from '../../Helpers/Contexts';
import './MainMenu.css';
import Button from '../Button/Button'
import axios from 'axios'


const MainMenu = () => {
    const categoryEl = useRef();
    
    const [categories,setCategories]=useState([]);
    const { setQuizState,setQuestions}=useContext(QuizContext);
    const start=()=>{setQuizState("quiz")}
    const handleSubmit=(e)=>{
        e.preventDefault()
      
    }

    useEffect(()=>{
        axios.get('https://opentdb.com/api_category.php')
       
        .then(res=> {
            setCategories(res.data.trivia_categories)
        })
    },[])

    useEffect (()=>{
        axios.get('https://opentdb.com/api.php?amount=10')
        .then(res => {
            setQuestions(res.data.results);
        })
    })

    
    return (
        <div className="Menu">
            <div>
                <form className="forms" onSubmit={start}>
                    <div className="form--group">
                        <label htmlFor="category">Categories</label>
                        <select id="category" ref={categoryEl}>
                            {
                                categories.map(category=>{
                                    return <option value={category.id} key={category.id}>
                                        {category.name}
                                    </option>})
                            }
                        </select>
                    </div>
                    <div className="form--group">
                        <label htmlFor="amount">Number of Questions</label>
                        <input type="number" id="amount" min="1" step="1" defaultValue={10} ref={amountEl} />
                    </div>
                </form>
            </div>
            <Button   label="Start"/>
            
        </div>
    )
}

export default MainMenu
