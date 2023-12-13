import React from 'react';
import Word from './Guess';
import Letters from './Letters';
import Stats from './Stats';
import PropTypes from 'prop-types';
import { setState } from 'react';


class GameControl extends React.Component {
  // const [word, setWord] = useState(null);
  constructor(props) {
    super(props);
    this.state = {
      turn: 0,
      toGuess: [],
      answer: "",
      formVisibleOnPage: false
    };
  
  }

handleClick = () => {
  this.setState({
    formVisibleOnPage: true,
  }, () => 
  console.log(this.state.formVisibleOnPage));
}

// handleClick = () => {
//   this.setState(prevState => ({
//     formVisibleOnPage: !prevState.formVisibleOnPage
//   }));
// }

//first time around sets to null, second time true

  resetGame() {
    this.setState({
      turn: 0,
      toGuess: ["_","_","_","_","_"],
      answer: ""
    });
  }

  // given a Letters letter, random words word and Guesses array, 
//will change state of array based on letter guess checked against 
//RandomWord word, will als increment turn

checkGuess(answer) {
  let splitWord = [];
  this.state.answer.forEach((letter) => {
    if (letter === input) {
      splitWord.push(letter)
    }
    else {
      splitWord.push("_")
    }
    this.setState({toGuess: splitWord}) 
  })
}
// import letters to gameControl checks guessingArray


// const handleGuess = (letter) => {
  
//   const updatedHiddenWord = [...hiddenWord]
//   if(selectedWord.includes(letter)) {
//     for(let i = 0; i < selectedWord.length; i++){
//       if(selectedWord[i]=== letter){
//         updatedHiddenWord[i] = letter;
//       }
//     }
//   } else {
//     setIncorrectGuess(incorrectGuesses + 1);
//   }

//   if(!updatedHiddenWord.includes("_")){
//     // yay you won
//     setShowNewWord(true);
//   }
//   if(incorrectGuesses === 6) {
//     // try again message {selectedWord}
//     setShowNewWord(true);
//   }
//  } ;

//  setHiddenWord(setWord.split("").map(() =>("_")))


// gameControl > GameView > CurrentRound() > Words(--s-) pass up guessWord, Letters(a) submit letter

countTurn = () => {
  let tempTurn = this.state.turn
  tempTurn += 1;
  if (tempTurn === 5) {
    alert("You Lose!")
  }
  this.setState({turn: tempTurn}) 
}

generateRandomWord = () => {
  // const { answer } = this.state;
  const availableWordList = ['adore', 'amore', 'amour', 'diety', 'flame', 'heart', 'honey'];
  const selectedWord = availableWordList[Math.floor(Math.random() * availableWordList.length )]
  console.log(`Selected Word: ${selectedWord}`);
  console.log(`Typeof SelectedWord: ${typeof(selectedWord)}`);
  this.setState({answer: "any word"});
  console.log(`Answer Value: ${this.state.answer}`)
}




  render(){
    // let currentVisibleState = null;
    
  return (
    
    <React.Fragment>
      <button onClick={this.handleClick}>Get a Word</button>
      {/* <Letters 
        letterClickFunction={this.checkGuess}/> */}
      <Stats 
        turn={this.state.turn}
      />
    </React.Fragment>
  )
}
}

export default GameControl;

// }
//should stats be passed up here or only to Current Round? 
//also should we get rid of GameView?