import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";
// import GamePlay from "./components/GamePlay";

function App() {

  const[isGameStarted, setIsGameStarted] = useState(false); //when state is false then its on first page but when state ischange from false to true then its change on to second component  

  const toggleGamePlay = () =>{
    setIsGameStarted((prev)=> !prev); //toggle for change the state from false to true
  } 

  return(
    <>
    {isGameStarted ? <GamePlay/> : <StartGame toggle={toggleGamePlay}/>}   {/* //tarnary : when state is ture then its show gameplay component otherwise shows first default components */}
  </>
  )
  
}

export default App;