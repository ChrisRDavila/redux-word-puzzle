import React from "react";
import Letters from "./Letters";
import PropTypes from "prop-types";
import { setState } from "react";
import { connect } from "react-redux";
import { v4 } from "uuid";

class GameControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  handleSetLetter = (newUsedLetters) => {
    const { dispatch } = this.props;
    const action = {
      type: "ADD_LETTER",
      usedLetters: { ...newUsedLetters },
    };
    dispatch(action);
  };

  handleSetGuess = (newGuess) => {
    const { dispatch } = this.props;
    const action = {
      type: "ADD_GUESS",
      toGuess: newGuess,
    };
    dispatch(action);
  };

  handleSetTurn = (newTurn) => {
    const { dispatch } = this.props;
    const action = {
      type: "COUNT_TURN",
      turn: newTurn,
    };
    dispatch(action);
  };

  handleSetAnswer = (newAnswer) => {
    const { dispatch } = this.props;
    const action = {
      type: "ADD_ANSWER",
      answer: newAnswer,
    };
    dispatch(action);
  };

  handleGuess = (letter) => {
    const updatedtoGuess = { ...this.props.toGuess };
    if (this.props.answer.includes(letter)) {
      for (let i = 0; i < this.props.answer.length; i++) {
        if (this.props.answer[i] === letter) {
          updatedtoGuess[i] = letter;
          this.handleSetGuess(updatedtoGuess);
        }
      }
    } else {
      this.countTurn();
    }
    const copyOfUsedLetters = { ...this.props.usedLetters };
    copyOfUsedLetters[v4()] = letter;
    this.handleSetLetter(copyOfUsedLetters);

    if (!Object.values(updatedtoGuess).includes("_")) {
      window.alert("You win!");
    }
    if (this.props.turn === 6) {
      window.alert("Try again");
    }
  };

  countTurn = () => {
    let tempTurn = this.props.turn;
    tempTurn += 1;
    this.handleSetTurn(tempTurn);
  };

  generateRandomWord = () => {
    const availableWordList = [
      "adore",
      "amore",
      "amour",
      "flame",
      "heart",
      "honey",
    ];
    const selectedWord =
      availableWordList[Math.floor(Math.random() * availableWordList.length)];
    this.handleSetAnswer(selectedWord);
    this.handleSetLetter({});
    this.handleSetGuess({ 0: "_", 1: "_", 2: "_", 3: "_", 4: "_" });
    this.handleSetTurn(0);
  };

  render() {
    let showGame;
    let buttonText = "Start";
    let guessedLettersInfo;
    if (this.props.usedLetters) {
      guessedLettersInfo = (
        <p>Guessed Letters: {Object.values(this.props.usedLetters)} </p>
      );
    }
    if (this.props.turn >= 0) {
      buttonText = "Reset";
      showGame = (
        <>
          <h3>Word to Guess: {Object.values(this.props.toGuess)} </h3>
          <p>Incorrect Attempts: {parseInt(this.props.turn)} </p>
          {guessedLettersInfo}
          <Letters
            letterClickFunction={this.handleGuess}
            usedLetters={this.props.usedLetters}
          />
        </>
      );
    }
    return (
      <>
        <button onClick={this.generateRandomWord}>{buttonText}</button>
        {showGame}
      </>
    );
  }
}

GameControl.propTypes = {
  answer: PropTypes.string,
  toGuess: PropTypes.object,
  turn: PropTypes.number,
  usedLetters: PropTypes.object,
};
const mapStateToProps = (state) => {
  return {
    usedLetters: state.usedLetters,
    toGuess: state.toGuess,
    turn: state.turn,
    answer: state.answer
  };
};

GameControl = connect(mapStateToProps)(GameControl);

export default GameControl;

//if export default class move connect() above class consturctor
