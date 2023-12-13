import PropTypes from "prop-types";
import React from "react";
import { useState } from "react";

// this module will give us a new word for our game upon start game based on random
const words = [ 'adore', 'amore', 'amour', 'diety', 'flame', 'heart', 'honey' ];

function handleStartGame(fn) {
  const word = words[Math.floor(Math.random() * words.length )];
  fn(word);
}

export default function RandomWord(props) {
  const [word, setWord ] = useState(null);
  return (
    <>
      <button onClick={() => {
        handleStartGame(setWord);
      props.setWord(word)
    }}>Start Game</button>
      <div>{word}</div>
    </>
  );
}

RandomWord.propTypes = {
  setWord: PropTypes.func,
};