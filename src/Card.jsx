import React from 'react'

function Card(props) {
    
    return (
        <>
            <img src={props.imgSrc} alt="check internet" />
            <h2>Title - {props.title}</h2>
            <p>{props.description}</p>
            <a href={props.link} target="_blank">Click Here</a> <br />
        </>
    )

}

export default Card