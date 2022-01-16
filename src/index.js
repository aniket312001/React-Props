import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import './index.css';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <>
    <Card imgSrc="https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_FMjpg_UX1000_.jpg" 
          title="Game Of Throne"
          link="https://www.hbo.com/game-of-thrones"/>

    <br></br>

    <Card imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT22kagEdD44frnbdp3S-rKC1wZqdq8pPtTfw&usqp=CAU" 
          title="Stranger Things"
          link="https://www.netflix.com/in/title/80057281"/>

    <br></br>

    <Card imgSrc="https://m.media-amazon.com/images/M/MV5BOWNlMjBjZTUtNThiNy00OTkxLThiZTQtNTEyZDliZTM3N2Q0XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg" 
          title="Breaking Bad"
          link="https://www.netflix.com/in/title/70143836"/>

    
  </>
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
