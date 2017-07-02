import { connect } from 'react-redux';
import { isNull } from 'lodash';
import { newGame, pushStaged } from '../../state/game/actions';
import { getStaged } from '../../state/game/reducer';
import MainActionButton from './MainActionButton';

export default connect(
  (state) => ({
    isStaged: !isNull(getStaged(state))
  }),
  (dispatch) => ({
    newGame() {
      dispatch(newGame());
    },
    pushStagedSelection() {
      dispatch(pushStaged());
    }
  })
)(MainActionButton);
