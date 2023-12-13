import PropTypes from 'prop-types';

// this module will create count number variables for wins, losses, and turns
function Stats(props) {
  return (
    <>
      <div>Stats</div>
      <div>Wins: {props.wins}</div>
      <div>Losses: {props.losses}</div>
      <div>Turn {props.turn}</div>
    </>
  )
};

Stats.propTypes = {
  wins: PropTypes.number,
  losses: PropTypes.number,
  turn: PropTypes.number,
}

export default Stats;