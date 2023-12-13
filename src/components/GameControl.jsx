import React from 'react';
import CurrentRound from './CurrentRound';
import React from 'react';

class GameControl extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    guess: 0,
    toGuess: [],
    answer: randomWord()
  }
}
  resetGame() {
    this.setState({
      guess: 0,
      toGuess: [_,_,_,_,_],
      answer: randomWord()
    });
  }

  render(){

  return (
    <React.Fragment>
      <CurrentRound />
      <Stats />
    </React.Fragment>
  )
}
}
export default GameControl;

//should stats be passed up here or only to Current Round? 
//also should we get rid of GameView?