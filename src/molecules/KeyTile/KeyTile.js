import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import HighlightOffIcon from 'material-ui/svg-icons/action/highlight-off';
import DoneIcon from 'material-ui/svg-icons/action/done';

import {
  RED_TEAM,
  BLUE_TEAM,
  BOMB,
  FREE,
  COLOR_MAP
} from '../../constants/gameState';

import KeyContainer from '../../atoms/KeyContainer';

class KeyTile extends Component {
  render () {
    const {
      ownedBy,
      onSubmit,
      marked,
      position
    } = this.props;
    const backgroundColor = COLOR_MAP[ownedBy];
    const submit = () => onSubmit(position);
    return (
      <KeyContainer isMarked>
        <RaisedButton
          onClick={submit}
          backgroundColor={backgroundColor}
          style={{ minWidth: '100%' }}
          icon={!marked ? <HighlightOffIcon/> : <DoneIcon/>}
        />
      </KeyContainer>
    )
  }
}

KeyTile.propTypes = {
  ownedBy: PropTypes.oneOf([RED_TEAM, BLUE_TEAM, BOMB, FREE]).isRequired,
  position: PropTypes.array,
  onSubmit: PropTypes.func,
}
KeyTile.defaultProps = {
  onSubmit() {}
}

export default KeyTile;
