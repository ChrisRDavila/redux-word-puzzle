import gameControlReducer from '../../reducers/game-control-reducer.jsx';

describe('gameControlReducer', () => {
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(gameControlReducer({}, { type: null })).toEqual({});
  });
});