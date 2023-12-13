import PropTypes from 'prop-types';

// this module will take care of word array for guess
let toGuess = [
  "_","_","_","_","_"
]

function Guess(props) {
  return (
    <>
      <h2>Word to Guess: {props.toGuess}</h2>
    </>
  )
}

Guess.propTypes = {
  toGuess: PropTypes.array
}

export default Guess;
