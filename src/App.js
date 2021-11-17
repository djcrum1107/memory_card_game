import './App.css';
import React, { useState } from 'react'
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

    const addPoint = () => {
        setScore(score + 1);
      };

  const onClick = () => {
    addPoint();
    console.log('Gameboard clicked');
  }

  return (
    <div className="App">
      <Header title='Header Title' score={score}/>
      <Gameboard cards={cards} onClick={onClick}/>
    </div>
  );
}

export default App;