 
import Button from '../Button/Button';
import './EndScreen.css'
import EndScreenLogic from './EndScreenLogic';

const EndScreen = () => {
    const{close,
        details,
        scoreEl,
        restart,
        review,       
        total}=EndScreenLogic();
    
    return (
        <div className="endpage">
            <div className="scores">
                <h1>Your Score</h1>
                <h2 className="score">{scoreEl.current}/{total}</h2>
            </div>
            <div>
                <Button label="Details" onClick={ details} />
                 <Button label="restart" onClick={restart}/>
            </div>
            <div className="pop-up" id="popup">
                <h2>Details</h2>
                <h4>Marking Scheme--Your choices</h4>
                     {
                         review.map((review,idx)=>{
                         return <p key={idx}>{review}</p>})
                     }
                <button onClick={close}>close</button>
            </div>            
        </div>
    )
}
export default EndScreen
