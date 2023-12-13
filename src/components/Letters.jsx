import PropTypes from "prop-types";


const letterArray = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z];
let guessedArray = [randomWords];
function letterClickfunction(props) {
  if (letterArray.includes(letter)) {
    guessedArray.push(letterInput);
  }

}



export default function Letters(props) {
  return (
    props.availableList.forEach((letter) => {
      <Letters 
        myValue={letter} 
        onLetterClick={props.letterClickFunction}
      />
    })
  )
}

//click letter, do we need keyboard module? UI modal for keyboard?

Letters.propTypes = {
  letterClickFunction: PropTypes.func,
  availableList: PropTypes.array
}

//import guessWord, function to determine guess word from array,
//checks letter against guess word with includes method, returns array of - and alpha based on postion index and letter
//


// export default function Letter(props) {
//   let currentEnabledState = 1;

//   function handleClick() {
//     if (currentEnabledState === 1) {
//       props.onLetterClick(props.myValue);
//       currentEnabledState === 0;
//     } else {

//     }
//   }

//   return (
//     props.availableList.forEach((letter) => {
//       <Letters 
//         myValue={letter} 
//         onLetterClick={props.letterClickFunction}
//       />
//     })
//   )
// }