import { useState } from "react"

import { Square } from "./componente/Square.jsx"
import { TURNS } from "./constants.js"
import {checkWinnerFrom, checkEndGame} from "./logic/board.js"
import { WinnerModal } from "./componente/WinnerModal.jsx"


function App() {

  const [board,setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] =useState(TURNS.X)

  //null no hay ganador y false hay un empate
  const [winner, setWinner] = useState(null)

  //CON ESTO PUEDO RESETEAR EL ESTADO DEL JUEGO QUE ESTOY PROGRAMANDO
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }
  
  const updateBoard = ( index ) => {
    if(board[index] || winner) return
    
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    const newWinner = checkWinnerFrom(newBoard)

    if(newWinner){
      setWinner(newWinner)
    }else if(checkEndGame(newBoard)){
      setWinner(false)
    }
  }

  return (
    
    <main className='board'>
      <h1>El gato</h1>
      <button onClick={resetGame}>Reset del nuevo</button>
      <section className="game">
        {
          board.map((_, index) =>{
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {board[index]}
              </Square>
            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelected={turn == TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn == TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal resetGame = {resetGame} winner = {winner}/>
    </main>
  )
}

export default App
