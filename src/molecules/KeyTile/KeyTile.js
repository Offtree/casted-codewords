import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import HighlightOffIcon from 'material-ui/svg-icons/action/highlight-off';
import DoneIcon from 'material-ui/svg-icons/action/done';
import DoneAll from 'material-ui/svg-icons/action/done-all';

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
      staged,
      position
    } = this.props;
    let backgroundColor = COLOR_MAP[ownedBy];
    const submit = () => onSubmit(position);

    let icon = <HighlightOffIcon/>;
    if (staged) icon = <DoneIcon/>;
    if (marked) icon = <DoneAll/>;

    return (
      <KeyContainer>
        <RaisedButton
          disabled={marked}
          onTouchTap={submit}
          backgroundColor={backgroundColor}
          style={{ minWidth: '100%' }}
          icon={icon}
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
