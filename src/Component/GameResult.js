import React from 'react';

function GameResult ({ winner, resetGame }) {
  return (
    <div className='msgContainer'>
      <h1>{winner}</h1>
      <button id='newGame' onClick={resetGame}>Play Again</button>
    </div>
  )
}

export default GameResult;