import { connect } from 'react-redux';
import { getBoard } from '../../state';
import { getStaged } from '../../state/game/reducer';
import CastReciever from './CastReciever';

const mapDispatchToProps = (dispatch) => ({
  dispatchSenderEvent(event) {
    dispatch(event);
  }
})

const mapStateToProps = (state) => ({
  board: getBoard(state),
  staged: getStaged(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CastReciever);
