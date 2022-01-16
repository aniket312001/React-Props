import React from 'react'

function Card(props) {
    
    return (
        <>
            <img src={props.imgSrc} alt="check internet" />
            <h2>Title - {props.title}</h2>
            <p>Orignal Webseries</p>
            <a href={props.link} target="_blank">Click Here</a>
        </>
    )

}

export default Card