import PropTypes from "prop-types";
import GuessWords from "./GuessWords";



export default function Letters(props) {
  return (
    props.availableList.forEach((letter) => {
      <Letter 
        myValue={letter} 
        onLetterClick={props.letterClickFunction}
      />
    })
  )
}

Letters.propTypes = {
  letterClickFunction: PropTypes.func,
  availableList: PropTypes.array
}

//import guessWord, function to determine guess word from array,
//checks letter against guess word with includes method, returns array of - and alpha based on postion index and letter
//