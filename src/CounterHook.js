import React, {useState} from "react";
export default function CounterHook(){
    const[count,setCount] = useState(0);

    function addCounter(){
        setCount(count + 1);
    }
    return(
        <>
            <h2>Counter using Hooks</h2>
            <h3>{count}</h3>
            <button type="button" className='btnClick' onClick={addCounter} >Counter</button>
        </>
    )
}