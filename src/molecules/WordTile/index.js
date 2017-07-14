import { connect } from 'react-redux';
import { selectors } from 'codenames-state'
import WordTile from './WordTile';

const mapStateToProps = (state, ownProps) => {
  return {
    ownedBy: selectors.getOwnedBy(state, ownProps.position),
    marked: selectors.getMarked(state, ownProps.position),
    staged: selectors.isStaged(state, ownProps.position)
  }
}

export default connect(
  mapStateToProps
)(WordTile);
