import React, { useState } from 'react';
import Die from './Die';

export default function DiceBox() {
    // const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]); // Initial state
const [dice, setDice] = useState([
  { value: 1, held: false },
  { value: 2, held: false },
  { value: 3, held: false },
  { value: 4, held: false },
  { value: 5, held: false }
]);

    // function rollDice() {
    //     setNumbers(prevNumbers => (
    //         prevNumbers.map(() => Math.floor(Math.random() * 6) + 1)
    //     ));
    // }
function rollDice() {
  setDice(prevDice => prevDice.map(die => {
    return die.held ? die : { ...die, value: Math.floor(Math.random() * 6) + 1 };
  }));
}
    
    function toggleHold(index) {
  setDice(prevDice => prevDice.map((die, idx) => {
    if (idx === index) {
      return { ...die, held: !die.held };
    }
    return die;
  }));
}


// function toggleHold(index) {
//   setDice(prevDice => prevDice.map((die, idx) => idx === index ? { ...die, held: !die.held } : die));
// }
return (
  <div>
    <h2>Dice Numbers:</h2>
    <div className="dice-container">
      {dice.map((die, index) => (
        <span key={index} className={`die ${die.held ? 'held' : ''}`} onClick={() => toggleHold(index)}>
          {die.value}
        </span>
      ))}
    </div>
    <button onClick={rollDice}>Roll Dice</button>
  </div>
);

}


