import PropTypes from "prop-types";
import React from "react";

const guessWords = [
  adore, amore, amour, diety, flame, heart, honey 
]


function handleStartGame (event) {
  event.preventDefault();

  props.getWord() {
  const words = guessWords;
  const word = words[Math.floor(Math.random() * words.length )]
  return word;
}
}
function RandomWord(props){
  return (
  <div>
  <form whenStartClicked={props.handleStartGame}>
    <button type="submit">Start Game</button>
  </form>
  <p>{props.word}</p> 
  {/* doesnt need to be visible passing prop */}
  </div>
  )
}

RandomWord.propTypes = {
  word: PropTypes.string,
  getWord: PropTypes.func
}

export default RandomWord;