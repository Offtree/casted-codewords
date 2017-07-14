import { connect } from 'react-redux';
import { selectors } from 'codenames-state'
import CastReciever from './CastReciever';

const getHelpDialogOpen = (state) => false;

const mapDispatchToProps = (dispatch) => ({
  dispatchSenderEvent(event) {
    dispatch(event);
  }
})

const mapStateToProps = (state) => ({
  board: selectors.getBoard(state),
  staged: selectors.getStaged(state),
  helpDialogOpen: getHelpDialogOpen(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CastReciever);
