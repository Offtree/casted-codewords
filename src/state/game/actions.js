export const NEW_GAME = 'GAME - New game';
export const SELECT_TILE = 'GAME - select tile';
export const UNDO_SELECT = 'GAME - undo turn';

export const newGame = () => ({
  type: NEW_GAME
});

export const selectTile = (location) => ({
  type: SELECT_TILE,
  payload: location
});

export const undoSelect = () => ({
  type: UNDO_SELECT
});
