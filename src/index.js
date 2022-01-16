import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import './index.css';

import data from './data.json'

import reportWebVitals from './reportWebVitals';
// console.log(data[0]);


function ncard(val,index){
      return (
            console.log(index),


            <Card imgSrc={val.imgSrc} 
            key={val.id}   // for removinf the warning 
            title={val.title}
            link={val.link} 
            description = {val.description}      
        />
      )
}


ReactDOM.render(
  <>
   
   

   {data.map(ncard)}
    
    
  </>
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
