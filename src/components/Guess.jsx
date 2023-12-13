import PropTypes from 'prop-types';


let wordPlaceholder = [
  "_","_","_","_","_"
]
//shared state
//cant use dashes in array unless its a string or template literal

function Guess() {
  return (
    <>
      <h2>{props.word}</h2>
    </>
  )
}

Guess.propTypes = {
  word: PropTypes.array
}

export default Guess;

//props for index? starts as array maybe of [-,-,-,-,-] and the updates to [a,-,-,-,-]

// const lightAction = [
//   { action: blackLight, label: 'blackLight' },
//   { action: giveLight, label: 'giveLIght' },
//   { action: superSun, label: 'superSun' },
// ];

// document.getElementById('feed').onclick = function() {
//   const randomFoodAction = foodActions[Math.floor(Math.random() * foodActions.length)];
//   const newState = stateControl(randomFoodAction.action);
//   document.getElementById('soil-value').innerText = `PlantScore: ${newState.soil}`;
//   }