import { connect } from 'react-redux';
import { newGame } from '../../state/game/actions';

import GameOptionsIconMenu from './GameOptionsIconMenu';
export default connect(
  undefined,
  (dispatch) => ({
    newGame() {
      dispatch(newGame());
    }
  })
)(GameOptionsIconMenu);
