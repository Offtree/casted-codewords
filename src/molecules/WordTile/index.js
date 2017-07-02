import { connect } from 'react-redux';
import { getOwnedBy, getMarked } from '../../state/game/reducer';
import { pushStaged } from '../../state/game/actions';
import WordTile from './WordTile';

const mapStateToProps = (state, ownProps) => {
  return {
    ownedBy: getOwnedBy(state, ownProps.position),
    marked: getMarked(state, ownProps.position)
  }
}
const mapDispatchToProps = (dispatch) => ({
  select: (position) => {
    dispatch(pushStaged(position));
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WordTile);
