import PropTypes from "prop-types";

export default function Letters(props) {

  function doLetterClick(letter) {
    //to consider :changing this.state.usedLetters to props.usedLetters on Control..will it cause issues with next line of code?
    if (!props.usedLetters.includes(letter)) {
      props.letterClickFunction(letter)
    }
  }
  const keyboardStyle = {
    textAlign: "center",
    backgroundColor: "#0A0A0A",
    padding: "20px",
    borderRadius: "20px"
  }
  const pressedButton = {
    backgroundColor: "#0A0A0A",
    color: "#0A0A0A"
  }
  return (
    <>
    <div style={keyboardStyle}>
      {"qwertyuiop".split("").map((ltr, index) => (
        <button 
        // to consider here also, is this now an object of props
        style={props.usedLetters.includes(ltr) ? pressedButton : null}
        key={index}
        value={ltr}
        onClick={() => {doLetterClick(ltr)}}>
        {ltr}</button>))}
        <br />
      {"asdfghjkl".split("").map((ltr, index) => (
        <button
        style={props.usedLetters.includes(ltr) ? pressedButton : null}
        key={index}
        value={ltr}
        onClick={() => {doLetterClick(ltr)}}>
        {ltr}</button>))}
        <br />
      {"zxcvbnm".split("").map((ltr, index) => (
        <button
        style={props.usedLetters.includes(ltr) ? pressedButton : null}
        key={index}
        value={ltr}
        onClick={() => {doLetterClick(ltr)}}>
        {ltr}</button>))}
    </div>
    </>
 )}

Letters.propTypes = {
  letterClickFunction: PropTypes.func,
  usedLetters: PropTypes.array
  //is used letters now an object of props?
}