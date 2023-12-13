import React from 'react';
import CurrentRound from './CurrentRound';
import React from 'react';

class GameControl extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    gameStats: {
      wins: 0,
      losses: 0,
      currentRound: 0
    }, 
    word: [],
  }
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