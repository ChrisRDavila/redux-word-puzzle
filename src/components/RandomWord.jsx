import PropTypes from "prop-types";
import React from "react";
import { useState } from "react";

const words = [ adore, amore, amour, diety, flame, heart, honey ];

function handleStartGame(fn) {
  const word = words[Math.floor(Math.random() * words.length )];
  fn(word);
}

function RandomWord() {
  const [word, setWord] = useState(null);
  return (
    <div>
      <button onClick={setWord}>Start Game</button>
      <p>{word}</p> 
    </div>
  );
}

export default RandomWord;