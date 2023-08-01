import { useNavigate } from "react-router-dom";

function Lab(){

    const forward = useNavigate();
    function forwardHandler(){
        forward('/about')
    }
    return(
        <div>
            <div>This is Lab Page...</div>
            <button onClick={forwardHandler}>Move to About Page</button>
        </div>
    )
}

export default Lab;