import React, { useState } from 'react'
import '../App.css';
const Sqare = ({value,onSquareClick}) => {
  return (
       <button className = "square" onClick={onSquareClick} > {value} </button> 
  )
}

export default Sqare
