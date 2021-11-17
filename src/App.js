import './App.css';
import React, { useState, useEffect } from 'react'
import Gameboard from './components/Gameboard';
import Header from './components/Header';

function App() {

  const getInitCards = () => {
    let cardSet = [
      {
        id: 1,
        img: 'image',
        text: 'Sample text'
      },
      {
        id: 2,
        img: 'image',
        text: 'Sample text'
      },
      {
        id: 3,
        img: 'image',
        text: 'Sample text'
      },
      {
        id: 4,
        img: 'image',
        text: 'Sample text'
      },
      {
        id: 5,
        img: 'image',
        text: 'Sample text'
      },
    ];
    return cardSet;
  }
  const [cards, setCards] = useState(getInitCards, []);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [selectedIDs, setSelectedIDs] = useState([]);

  const addPoint = () => {
    setScore(score + 1);
  };

  const onClick = (id) => {
    if(selectedIDs.includes(id)){
      setSelectedIDs([]);
      setScore(0);
    }else{
      setSelectedIDs([...selectedIDs, id]);
      addPoint();
    }
  };

  useEffect(() => {
    if(score > highScore){
      setHighScore(score);
    };
  }, [score]);

  return (
    <div className="App">
      <Header title="DJ's Memory Game" score={score} highScore={highScore}/>
      <Gameboard cards={cards} onClick={onClick}/>
    </div>
  );
}

export default App;