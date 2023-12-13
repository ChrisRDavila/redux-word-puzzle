import React from 'react';
import Letters from './Letters';
import PropTypes from 'prop-types';
import { setState } from 'react';


export default class GameControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      turn: 0,
      toGuess: [],
      answer: "",
      usedLetters: [],
    };
  }

  handleGuess = (letter) => {
    const updatedtoGuess = [...this.state.toGuess]
    if(this.state.answer.includes(letter)) {
      for(let i = 0; i < this.state.answer.length; i++){
        if(this.state.answer[i]=== letter){
          updatedtoGuess[i] = letter;
          this.setState({toGuess: updatedtoGuess});
        }
      }
    } else {
      this.countTurn();
    }
    let updatedUsedLetters = [...this.state.usedLetters];
    updatedUsedLetters.push(letter);
    this.setState({usedLetters: updatedUsedLetters});

    if(!updatedtoGuess.includes("_")){
      window.alert("You win!")
    }
    if(this.state.turn === 6) {
      window.alert("Try again");
    }
  } ;

  countTurn = () => {
    let tempTurn = this.state.turn
    tempTurn += 1;
    this.setState({turn: tempTurn}) 
  }

  generateRandomWord = () => {
    const availableWordList = ['adore', 'amore', 'amour', 'flame', 'heart', 'honey'];
    const selectedWord = availableWordList[Math.floor(Math.random() * availableWordList.length )]
    this.setState({
      answer: selectedWord,
      toGuess: ["_","_","_","_","_"],
      turn: 0,
      usedLetters: []
    });
  }

  render(){
    let showGame;
    let buttonText = "Start";
    if (this.state.answer != "") {
      buttonText = "Reset"
      showGame = (
        <>
          <h3>Word to Guess: {this.state.toGuess} </h3>
          <p>Incorrect Attempts: {this.state.turn} </p>
          <p>Guessed Letters: {this.state.usedLetters} </p>
          <Letters 
            letterClickFunction={this.handleGuess}
            usedLetters={this.state.usedLetters}
            />
        </>
      )
    }
  return (
    <>
      <button onClick={this.generateRandomWord}>{buttonText}</button>
      {showGame}
      
    </>
  )
}
}