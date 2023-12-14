const reducer = (state = {}, action) => {
  const { turn, toGuess, answer, usedLetters } = action;
  switch (action.type) {
    case 'ADD_LETTER':
      return Object.assign({}, state, {
        turn: turn,
        toGuess: toGuess,
        answer: answer,
        usedLetters: usedLetters
        }
      );
    default: null
      return state  
    }
  };
export default reducer;