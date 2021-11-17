import './App.css';
import React, { useState, useEffect } from 'react'
import Gameboard from './components/Gameboard';
import Header from './components/Header';

function App() {

  const [cards, setCards] = useState([
    {
      id: 1,
      img: 'image',
      text: 'Sample text'
    }], []);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const addPoint = () => {
    setScore(score + 1);
  };

  const onClick = (id) => {
    addPoint();
  }

  useEffect(() => {
    if(score > highScore){
      setHighScore(score);
    };
  }, [score])

  return (
    <div className="App">
      <Header title='Header Title' score={score} highScore={highScore}/>
      <Gameboard cards={cards} onClick={onClick}/>
    </div>
  );
}

export default App;