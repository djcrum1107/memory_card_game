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
      {
        id: 6,
        img: 'image',
        text: 'Sample text'
      },
      {
        id: 7,
        img: 'image',
        text: 'Sample text'
      },
      {
        id: 8,
        img: 'image',
        text: 'Sample text'
      },
      {
        id: 9,
        img: 'image',
        text: 'Sample text'
      },
      {
        id: 10,
        img: 'image',
        text: 'Sample text'
      },
      {
        id: 11,
        img: 'image',
        text: 'Sample text'
      },
      {
        id: 12,
        img: 'image',
        text: 'Sample text'
      },
    ];
    return cardSet;
  }

  const shufflCards = () => {
    let shuffledCards = [];
    for(let i = cards.length; i > 0; i--){
      shuffledCards = [...shuffledCards, ...cards.splice(Math.floor(Math.random() * i), 1)]
    }
    setCards(shuffledCards);
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
    shufflCards()
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