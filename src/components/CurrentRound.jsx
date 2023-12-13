import Word from './Guess'
import Letters from './Letters'
import Word from './Guess'
import PropTypes from 'prop-types';

const guessWord = [touch, flick, fiddle, fumble, fudge]


const input = "a"
function checkGuess(input) {
  let splitWord = [];
  chosenWord.forEach((letter) => {
    if (letter === input) {
      splitWord.push(letter)
    }
    else {
      splitWord.push("-")
    }
    return splitWord
  })
}

const randomWord = words[Math.floor(Math.random() * words.length)]  
    
  //update word based on index postion

// import guessWord, import letter, import Word. check guessWord to see if import letter
//included, if included update word based of index postion and correct or dont update if not

function CurrentRound(props) {
  return (
    <>
      <Word  
      />
      <Letters />
    </>
  )
}

CurrentRound.propTypes = {
  word: PropTypes.array,
}

export default CurrentRound;


// gameControl > GameView > CurrentRound() > Words(--s-) pass up guessWord, Letters(a) submit letter