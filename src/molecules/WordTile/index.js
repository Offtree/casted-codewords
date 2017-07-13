import { connect } from 'react-redux';
import { getOwnedBy, getMarked, isStaged } from '../../state/game/reducer';
import WordTile from './WordTile';

const mapStateToProps = (state, ownProps) => {
  return {
    ownedBy: getOwnedBy(state, ownProps.position),
    marked: getMarked(state, ownProps.position),
    staged: isStaged(state, ownProps.position)
  }
}

export default connect(
  mapStateToProps
)(WordTile);
