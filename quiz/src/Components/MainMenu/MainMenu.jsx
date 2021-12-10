import React  from 'react'
import './MainMenu.css';
import Button from '../Button/Button'
import MainMenuLogic from './MainMenuLogic';
const MainMenu = () => {
    const {handleSubmit, categories,categoryEl,amountEl}=MainMenuLogic(); 
    
    return (
        <div className="Menu">
            <div>
                <form className="forms"  >
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
