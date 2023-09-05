import React, {useState} from "react";
import "./App.css";
import Block from "./components/Block";

function App() {
  const [state, setState] = useState(Array(9).fill(null));
  const [currTurn, setCurrTurn] = useState("X");

  const checkWinner = (state: any[])=>{
    const win = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    for(let i=0; i<win.length; i++){
      const [a,b,c] = win[i];
      if (state[a] !=null && state[a] === state[b] && state[b] === state[c]) return true;
}
return false;
  }

  const clickHandler = (index: number)=>{
    const stateCopy = Array.from(state)
    if(stateCopy[index] !==null) return
    stateCopy[index] = currTurn
    setState(stateCopy)

    // check if someone won
    const win = checkWinner(stateCopy)
    if (win){
      alert(`${currTurn} won the game`)
    }

    setCurrTurn(currTurn === 'X'? "0":"X")
  }
  return (
      <div style={{display:"flex", justifyContent:"center",alignItems:"center", flexDirection:"column"}}>
      <p style={{fontSize:"40px", fontStyle:"italic", padding:'20px', textAlign:"center"}}>Tic-Tac-Toe</p>
    <div className="board">
      <div className="row">
        <Block onClick={()=> clickHandler(0)} value ={state[0]}/>
        <Block onClick={()=> clickHandler(1)} value ={state[1]}/>
        <Block onClick={()=> clickHandler(2)} value ={state[2]}/>
      </div>
      <div className="row">
        <Block onClick={()=> clickHandler(3)} value ={state[3]}/>
        <Block onClick={()=> clickHandler(4)} value ={state[4]}/>
        <Block onClick={()=> clickHandler(5)} value ={state[5]}/>
      </div>
      <div className="row">
        <Block onClick={()=> clickHandler(6)} value ={state[6]}/>
        <Block onClick={()=> clickHandler(7)} value ={state[7]}/>
        <Block onClick={()=> clickHandler(8)} value ={state[8]}/>
      </div>
    </div>
    </div>
  );
}

export default App;
