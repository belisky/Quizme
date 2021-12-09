import React,{useContext,useEffect,useRef,useState} from 'react'
import { QuizContext } from '../../Helpers/Contexts';
import './MainMenu.css';
import Button from '../Button/Button'
import axios from 'axios'


const MainMenu = () => {
    const categoryEl = useRef();
    const amountEl=useRef();
    const [categories,setCategories]=useState([]);
    const { setQuizState,setQuestions,setTotal}=useContext(QuizContext);
    //const start=()=>{setQuizState("quiz")}
    const handleSubmit=(e)=>{
        e.preventDefault()
        setTotal(amountEl.current.value);
        axios.get('https://opentdb.com/api.php',{
            params:{
                amount:amountEl.current.value,
                category:categoryEl.current.value
            }
        })
        .then(res => {
            setQuestions(res.data.results); 
            setQuizState("quiz");
           
      
    })
}

    useEffect(()=>{
        axios.get('https://opentdb.com/api_category.php')
       
        .then(res=> {
            setCategories(res.data.trivia_categories)
        })
    },[])

    

    
    return (
        <div className="Menu">
            <div>
                <form className="forms" onSubmit={handleSubmit}>
                    <div className="form--group">
                        <label className="labels" htmlFor="category">Categories</label>
                        <select className="inputs" id="category" ref={categoryEl}>
                            {
                                categories.map(category=>{
                                    return <option value={category.id} key={category.id}>
                                        {category.name}
                                    </option>})
                            }
                        </select>
                    </div>
                    <div className="form--group">
                        <label className="labels" htmlFor="amount">Number of Questions</label>
                        <input className="inputs" type="number" id="amount" min="1" step="1" defaultValue={10} ref={amountEl} />
                    </div>
                </form>
            </div>
            <Button  onClick={handleSubmit}  label="Start"/>
            
            
        </div>
    )
}

export default MainMenu
