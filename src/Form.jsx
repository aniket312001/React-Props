import React,{ useState } from 'react'


const Form = ()=>{
    
    let [Data,setData ]= useState({
        name:"",
        email:"",
        pass: "",
        phone: ""        

    })
  

    const inputField = (event)=>{
        
        // console.log(event.target.value)
        // console.log(event.target.name)

        const value = event.target.value
        const name = event.target.name

        setData((prevValue)=>{
            // console.log(prevValue)

            return {
                ...prevValue,
                [name]:value,
            }

            // if(name === 'name'){
            //     return {
            //         name : value,
            //         email : prevValue.email,
            //         pass : prevValue.pass 
            //     }
            // } else if(name === 'email'){
            //         return {
            //             name : prevValue.name,
            //             email : value,
            //             pass : prevValue.pass 
            //         }
            //     }
            // else if(name === 'pass'){
            //         return {
            //             name : prevValue.name,
            //             email : prevValue.email,
            //             pass : value 
            //         }
            //     }
           

        })


    }
  

    const submit = (event)=>{
        event.preventDefault()
        console.log(Data)
    }

    return (
        <>
            <h1>Hello  </h1>
            <form onSubmit={submit}>

                <input type="text"  placeholder='Enter Your Name' name='name' onChange={inputField}  /><br/>
                <input type="text"  placeholder='Enter Your email' name='email' onChange={inputField}  /><br/>
                <input type="text"  placeholder='Enter Your password' name='pass' onChange={inputField}  /><br/>
                <input type="text"  placeholder='Enter Your number' name='phone' onChange={inputField}  /><br/>
                <button type='submit'>Click Me</button> 
            </form>
        </>
    )
}

export default Form