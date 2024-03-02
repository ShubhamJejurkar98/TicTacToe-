import React, { useEffect, useState } from 'react';
import GameBoard from './GameBoard';
import GameResult from './GameResult';


function TicTacToe() {
  const initialBoxState = Array(9).fill(null);
  const [box, setBox] = useState(initialBoxState);
  const [turnO, setTurnO] = useState(true);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    checkWinner();
  }, [box]);

  const handleBoxClick = (index) => {

    if (winner || box[index] !== null) {
      return;
    }

    // console.log("You clicked on the box!", index);

    const newBox = [...box];              // Create a copy of the current state array
    newBox[index] = turnO ? 'O' : 'X';    // Set the value of the clicked box based on the current turn
    setBox(newBox);                       // Update the state with the new array
    setTurnO(!turnO);                     // Toggle the turn for the next move

  };

  const checkWinner = () => {

    const winPatterns = [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [3, 4, 5],
      [6, 7, 8],
    ];

    for (let pattern of winPatterns) {
      const [pos1, pos2, pos3] = pattern;
      if (
        box[pos1] !== null &&
        box[pos2] !== null &&
        box[pos3] !== null &&
        box[pos1] === box[pos2] &&
        box[pos2] === box[pos3]
      ) {
        setWinner(`Congratulations! Winner is ${box[pos1]}`);
        return;
      }
    }
    if (box.every((cell) => cell !== null)) {
      setWinner('It\'s a draw!');
    }
    return null;
  }

  const resetGame = () => {
    setBox(initialBoxState);
    setWinner(null);
    setTurnO(true);
  }

  return (
    <div>
     {winner && <GameResult winner={winner} resetGame={resetGame} />}

      <div className='container'>
       <GameBoard box={box} handleBoxClick={handleBoxClick} />
       <button id='rstBtn' onClick={resetGame}>Reset Game</button>
      </div>
    </div>
  );
}

export default TicTacToe;
