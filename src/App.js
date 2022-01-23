import React from 'react'
import './index.css';

const SlotM = (props)=>{
  // console.log(props.x)
  let x = props.x
  let y = props.y 
  let z = props.z

  if((x===y) && (y===z)){
    return (
      <>
        <div className='slot_inner'>
            <h1> {x}  {y}  {z} </h1>
            <h1> This is Matching </h1>
            <hr/>
        </div>
      
      </>
    )
  } else {
    return (
      <>
        <div className='slot_inner'>
            <h1> {x}  {y}  {z} </h1>
            <h1> This is Not Matching </h1>
            <hr/>
        </div>
      
      </>
    )
  }

}





const App = ()=>{
  return (
    <>
      <h1 className='heading_style'>  Welcome  to  <span style={{fontWeight:'bold'}}> Slot Machine Game</span></h1>
      <div>

        <SlotM x="😄" y="😄" z="😄" />
        <SlotM x="😄" y="🍎" z="😄" />
        <SlotM x="🍎" y="🍎" z="🍎" />
        
      </div>
    </>
  )
}

export default App