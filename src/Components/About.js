import { useNavigate } from "react-router-dom";

function About(){
    const forward = useNavigate();
    const forwardHandler =()=>{
        forward('/support')
    }
    return(
        <div>
            <p>This is About Page...</p>
            <button onClick={forwardHandler}>Move to Support Page</button>
        </div>
    )
}

export default About;