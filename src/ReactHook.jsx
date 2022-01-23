import React, { useState } from 'react'


const ReactHook = ()=>{

    // console.log(state)

    // let cnt =0
    let [cnt,setCount] = useState(0)

    const IncNum = () =>{
        setCount(cnt + 1)
        console.log("Click ")
    }


    let [time,setTime] = useState( new Date().toLocaleTimeString())

    const ShowTime = () =>{
        setTime(new Date().toLocaleTimeString())
        
    }

    
    let [currTime,setCurrTime] = useState( new Date().toLocaleTimeString())

    setInterval(() => {
        setCurrTime(new Date().toLocaleTimeString())
    }, 1000);
    
    
    let [text,setText] = useState("Click Me 😄")

    const SingleClick = ()=>{
        setText("Ouch 😮")
    }
    const DoubleClick = ()=>{
        setText(" Sorry 😭")
 
    }

    return (
        <>
            <h1> {cnt} </h1>
            <button onClick={IncNum}> Click Me </button>
            
            <h1> {time} </h1>
            <button onClick={ShowTime}> Click Me </button>
        
            <h1>{currTime}</h1>

            <br></br>
            <br></br>
            <button onClick={SingleClick} onDoubleClick={DoubleClick}>{text}</button>
            <br></br>
            <br></br>
        
        </>
    )
}

export default ReactHook