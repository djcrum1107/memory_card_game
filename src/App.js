import './App.css';
import React, { useState, useEffect } from 'react'
import Gameboard from './components/Gameboard';
import Header from './components/Header';
import { barbarian_img,
  bard_img,
  cleric_img,
  druid_img,
  fighter_img,
  monk_img,
  paladin_img,
  ranger_img,
  rogue_img,
  sorcerer_img,
  warlock_img,
  wizard_img
} from './images/index'

function App() {  
  
  const getInitCards = () => {
    let cardSet = [
      {
        id: 1,
        img: barbarian_img,
        alt: 'barbarian'
      },
      {
        id: 2,
        img: bard_img,
        alt: 'bard'        
      },
      {
        id: 3,
        img: cleric_img,
        alt: 'cleric'       
      },
      {
        id: 4,
        img: druid_img,
        alt: 'druid'       
      },
      {
        id: 5,
        img: fighter_img,
        alt: 'fighter'        
      },
      {
        id: 6,
        img: monk_img,
        alt: 'monk'        
      },
      {
        id: 7,
        img: paladin_img,
        alt: 'paladin'        
      },
      {
        id: 8,
        img: ranger_img,
        alt: 'ranger'        
      },
      {
        id: 9,
        img: rogue_img,
        alt: 'rogue'       
      },
      {
        id: 10,
        img: sorcerer_img,
        alt: 'sorcerer'        
      },
      {
        id: 11,
        img: warlock_img,
        alt: 'warlock'        
      },
      {
        id: 12,
        img: wizard_img,
        alt: 'wizard'        
      },
    ];
    return cardSet;
  }

  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [selectedIDs, setSelectedIDs] = useState([]);

  useEffect(() => {
    const getCards = async () => {
      const cardsFromServer = await fetchCards();
      setCards(getInitCards);
      if(cardsFromServer == null){
        console.log('cardsFromServer error')
        
      }
      
    }

    getCards();
  }, [])

  const fetchCards = async () => {
    const res = await fetch('http://localhost:5000/cards');
    const data = await res.json()

    return data;
  }

  const shufflCards = () => {
    let shuffledCards = [];
    for(let i = cards.length; i > 0; i--){
      shuffledCards = [...shuffledCards, ...cards.splice(Math.floor(Math.random() * i), 1)]
    }
    setCards(shuffledCards);
  }

  

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