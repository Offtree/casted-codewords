import { connect } from 'react-redux';
import CastReciever from './CastReciever';

const mapDispatchToProps = (dispatch) => ({
  dispatchSenderEvent(event) {
    dispatch(event);
  }
})

export default connect(
  undefined,
  mapDispatchToProps
)(CastReciever);
