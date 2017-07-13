import { combineReducers, createStore } from 'redux';
import boardReducer from './board/reducer';
import gameReducer from './game/reducer';

const reducers = combineReducers({
  board: boardReducer,
  game: gameReducer
});

export default () => {
  return createStore(reducers);
};

export const getBoard = (state) => state.board;