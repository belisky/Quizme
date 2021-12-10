import {useContext,useEffect,useRef,useState} from 'react'
import { QuizContext } from '../../Helpers/Contexts';
import axios from 'axios';

const MainMenuLogic = () => {
    const categoryEl = useRef();
    const amountEl=useRef();
    const [categories,setCategories]=useState([]);
    const { setQuizState,setQuestions,setTotal}=useContext(QuizContext);

    useEffect(()=>{
        try {
        axios.get('https://opentdb.com/api_category.php')       
        .then(res=> {
            setCategories(res.data.trivia_categories)
        })} catch(error){
            console.log(error.message)
        }
    },[]) 

    const handleSubmit=(e)=>{
        e.preventDefault()
        setTotal(amountEl.current.value);
        try {
        axios.get('https://opentdb.com/api.php',{
            params:{
                amount:amountEl.current.value,
                category:categoryEl.current.value
            }
        })
        .then(res => {
            setQuestions(res.data.results); 
            setQuizState("quiz");             
    })} catch(error){
        console.log(error.message)
    }
}
    return {handleSubmit,categories,categoryEl,amountEl}
}

export default MainMenuLogic
