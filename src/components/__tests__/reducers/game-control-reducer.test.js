import gameControlReducer from '../../reducers/game-control-reducer.jsx';
import { expect, test, defineConfig } from 'vitest'

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
    action = {
      type: 'ADD_LETTER',
      letter: 'a'
    };
    expect(gameControlReducer(defaultState, action)).toEqual({
      turn: 1,
      toGuess: [],
      answer: '',
      usedLetters: ['a'],
    });
  })
