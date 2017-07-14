import React from 'react';
import PropTypes from 'prop-types';
import { constants } from 'codenames-state';
import RaisedButton from 'material-ui/RaisedButton';

import TileContainer from '../../atoms/TileContainer';

const {
  RED_TEAM,
  BLUE_TEAM,
  BOMB,
  FREE,
  COLOR_MAP
} = constants;

const WordTile = (props) => {
  const {
    word,
    ownedBy,
    marked,
    staged
  } = props;

  let backgroundColor;
  backgroundColor = staged ? COLOR_MAP.staged : backgroundColor;
  backgroundColor = marked ? COLOR_MAP[ownedBy] : backgroundColor;

  return (
      <TileContainer>
        <RaisedButton
          backgroundColor={backgroundColor}
          style={{width:'100%'}}
          label={word}
        />
      </TileContainer>
  )
}
WordTile.propTypes = {
  word: PropTypes.string,
  ownedBy: PropTypes.oneOf([RED_TEAM, BLUE_TEAM, BOMB, FREE]),
  marked: PropTypes.bool,
  staged: PropTypes.bool
}
WordTile.defaultProps = {
  word: 'No Word Found',
  ownedBy: FREE,
  marked: false,
  staged: 'poop'
}

export default WordTile;
