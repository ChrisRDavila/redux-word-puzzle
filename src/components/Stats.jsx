import PropTypes from 'prop-types';

function Stats(props) {
  return (
    <>
      <div>Stats</div>
      <div>Turn {props.turn}</div>
    </>
  )
};

Stats.propTypes = {
  turn: PropTypes.number,
}

export default Stats;