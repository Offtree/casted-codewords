import { connect } from 'react-redux';
import { selectors } from 'codenames-state'
import CastReciever from './CastReciever';

const mapDispatchToProps = (dispatch) => ({
  dispatchSenderEvent(event) {
    dispatch(event);
  }
})

const mapStateToProps = (state) => ({
  board: selectors.getBoard(state),
  staged: selectors.getStaged(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CastReciever);
