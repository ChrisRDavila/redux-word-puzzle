import PropTypes from "prop-types";

const words = [
  adore, amore, amour, diety, flame, heart, honey 
]

function getWord(words) {
  const word = words[Math.floor(Math.random() * words.length )]
}
function RandomWord(props){
  return (
  {props.word}
  );
}
RandomWord.propTypes = {
  word: PropTypes.string,
}

export default RandomWord;