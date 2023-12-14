import { a } from 'vitest/dist/suite-9ReVEt_h.js';
import gameControlReducer from '../../reducers/game-control-reducer.jsx';
import { expect, test, describe } from 'vitest'

  describe('gameControlReducer', () => {

    let action;
  const defaultState = {
    turn: 1,
    toGuess: [],
    answer: '',
    usedLetters: [],
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(gameControlReducer({}, { type: null })).toEqual({});
  });
  
  test('Should successfully add new letter to usedLetters array', () => {
    const { turn, toGuess, answer, usedLetters } = defaultState;
    action = {
      type: 'ADD_LETTER',
      usedLetters: ['a']
    };
    expect(gameControlReducer(defaultState, action)).toEqual({
      turn: 1,
      toGuess: [],
      answer: '',
      usedLetters: ['a'],
      
    });
  })

  test('should increment turn by when when COUNT_TURN is called', () => {
    const { turn, toGuess, answer, usedLetters } = defaultState;
    action = {
      type: 'COUNT_TURN',
      turn: 2,
    };
    expect(gameControlReducer(defaultState, action)).toEqual({
      turn: 2,
      toGuess: [],
      answer: '',
      usedLetters: [],
      
    });
  });

  test('should update our answer to random word string with ADD_ANSWER action', () => {
    const { turn, toGuess, answer, usedLetters } = defaultState;
    action = {
      type: 'ADD_ANSWER',
      answer: 'heart',
    };
    expect(gameControlReducer(defaultState, action)).toEqual({
      turn: 1,
      toGuess: [],
      answer: 'heart',
      usedLetters: [],
      
    });
  });

  // test('should update our guess with guess array with ADD_GUESS action', () => {
  //   const { turn, toGuess, answer, usedLetters } = defaultState;
  //   action = {
  //     type: 'ADD_ANSWER'
  //   };
  //   expect(gameControlReducer(defaultState, action)).toEqual({
  //     turn: 1,
  //     answer: '',
  //     usedLetters: [],
      
  //   });
  // });
});
