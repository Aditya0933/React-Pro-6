import { useNavigate } from "react-router-dom";

function Support(){
    const back = useNavigate();
    function backHandler(){
        back(-1)
    }
    return(
        <div>
            <p>This is Support Page...</p>
            <button onClick={backHandler}>Go Back</button>
        </div>
    )
}

export default Support;