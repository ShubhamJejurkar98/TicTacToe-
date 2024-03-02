import React from 'react';

function GameBoard ({ box, handleBoxClick }) {
  return (
    <div className='boxRow'>
        {box.map((value, index) => (
          <div key={index} className='box' onClick={() => handleBoxClick(index)}>{value}</div>
        ))}
      </div>
  )
}

export default GameBoard;