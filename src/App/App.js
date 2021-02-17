import logo from '../logo.svg';
import './App.css';
import Input from '../Components/Input';
import React, { useState } from 'react';
import compliments from '../listOfCompliments';
import Compliment from '../Components/Compliment';


function App() {
  const [text, setText] = useState("");
  const [complimentIndex, setcomplimentIndex] = useState(0);
  const [compliment, setCompliment] = useState("")

  function handleChange(event) {
    setText(event.target.value)
  }

  function handleClick() {
    setcomplimentIndex(Math.floor(Math.random() * compliments.length));
    let newCompliment = `${text}... ${compliments[complimentIndex]}`;
    setCompliment(newCompliment);
  }


  return (
    <div className="App">
      <header className="App-header">
        <Input handleChange={handleChange} handleClick={handleClick} />
        <img src={logo} className="App-logo" alt="logo" />
        <Compliment compliment={compliment}/>
        {/* <Compliment text={text} compliments={compliments} complimentIndex={complimentIndex}/> */}
      </header>
    </div>
  );
}

export default App;
