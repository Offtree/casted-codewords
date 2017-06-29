import { connect } from 'react-redux';
import { newGame } from '../../state/game/actions';

import App from './App';

const mapStateToProps = (state) => ({
  tiles: state.board,
  goals: state.game.goals
});
const mapDispatchToProps = (dispatch) => ({
  startGame: () => {
    dispatch(newGame());
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
