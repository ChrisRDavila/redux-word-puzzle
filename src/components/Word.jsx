import PropTypes from 'prop-types';


const word = [
  _,_,_,_,_
]
//cant use dashes in array unless its a string or template literal

function Word() {
  return (
    <>
      <h2>{props.word}</h2>
    </>
  )
}

Word.propTypes = {
  word: PropTypes.array
}

export default Word;

//props for index? starts as array maybe of [-,-,-,-,-] and the updates to [a,-,-,-,-]