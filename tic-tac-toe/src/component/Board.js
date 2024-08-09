import React, { useState } from 'react'
import Sqare from './Sqare'
import '../App.css';
const Board = () => {

       const [xIsNext,setIsNext] = useState(true);
       const [squares,setSquares]=useState(Array(9).fill(null))

       const winner = calculatorWinner(squares);

       let status;

       if(winner){
              status = "WINNER : " + winner;
       }else{
              status = "NEXT PLAYER : " + (xIsNext ? "X" : "O");
       }

       function handleClick(i) {
              if(squares[i] || calculatorWinner(squares)){
                     {
                            return;
                     }
              }
              const nextSquares = squares.slice();
              if(xIsNext){
                     nextSquares[i] ="X"
              }
              else{
                     nextSquares[i] = "O";
              }
             
              setSquares(nextSquares);
              setIsNext(!xIsNext)
       }
  return (
       <>
              <div className="status">
                     {status}
              </div>
              <div className='board'>
                     
                     <div className="board-row">
                            <Sqare value={squares[0]} onSquareClick={() => handleClick(0)}/>
                            <Sqare value={squares[1]} onSquareClick={() => handleClick(1)}/>
                            <Sqare value={squares[2]} onSquareClick={() => handleClick(2)}/>
                     </div>
                     <div className="board-row">
                            <Sqare value={squares[3]} onSquareClick={() => handleClick(3)}/>
                            <Sqare value={squares[4]} onSquareClick={() => handleClick(4)}/>
                            <Sqare value={squares[5]} onSquareClick={() => handleClick(5)}/>
                     </div>
                     <div className="board-row">
                            <Sqare value={squares[6]} onSquareClick={() => handleClick(6)}/>
                            <Sqare value={squares[7]} onSquareClick={() => handleClick(7)}/>
                            <Sqare value={squares[8]} onSquareClick={() => handleClick(8)}/>
                     </div>
                     
              </div>
       </>
  )
}

export default Board

function calculatorWinner(squares){
       const lines = [
              [0,1,2],
              [3,4,5],
              [6,7,8],
              [0,3,6],
              [0,4,8],
              [1,4,7],
              [2,5,8],
              [2,4,6],
       ];
       for(let i=0;i<lines.length;i++){
              const [a,b,c] = lines[i];
              if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c] ){
                     return squares[a];
              }
       }
       return null;
}
