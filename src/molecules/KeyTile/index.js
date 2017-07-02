import { connect } from 'react-redux';
import { getOwnedBy, getMarked, isStaged } from '../../state/game/reducer';
import { stageSelection } from '../../state/game/actions';
import KeyTile from './KeyTile';

const mapStateToProps = (state, ownProps) => {
  return {
    ownedBy: getOwnedBy(state, ownProps.position),
    staged: isStaged(state, ownProps.position),
    marked: getMarked(state, ownProps.position)
  }
}
const mapDispatchToProps = (dispatch) => ({
  onSubmit: (position) => {
    dispatch(stageSelection(position));
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KeyTile);
