const reducer = (state = {}, action) => {
  const { turn, toGuess, answer, usedLetters } = action;
  switch (action.type) {
    case 'ADD_LETTER':
      return Object.assign({}, state, {
        usedLetters: {...usedLetters}
        }
      );
    case 'COUNT_TURN':
      return Object.assign({}, state, {
        turn: turn
        }
      );
    case 'ADD_ANSWER':
      return Object.assign({}, state, {
        answer: answer,
        }
      );
    case 'ADD_GUESS':
      return Object.assign({}, state, {
        toGuess: toGuess,
      });

    default:
      return state  
    }
  };
export default reducer;