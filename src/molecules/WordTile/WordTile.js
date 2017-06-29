import React from 'react';
import PropTypes from 'prop-types';
import {
  RED_TEAM,
  BLUE_TEAM,
  BOMB,
  FREE,
  COLOR_MAP
} from '../../constants/gameState';

import TileContainer from '../../atoms/TileContainer';
import RaisedButton from 'material-ui/RaisedButton';

const WordTile = (props) => {
  const {
    word,
    ownedBy,
    marked,
    position,
    select
  } = props;
  const backgroundColor = marked ? COLOR_MAP[ownedBy] : undefined;

  return (
      <TileContainer>
        <RaisedButton
          backgroundColor={backgroundColor}
          onClick={() => select(position)}
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
  select: PropTypes.func
}
WordTile.defaultProps = {
  word: 'No Word Found',
  ownedBy: FREE,
  marked: false
}

export default WordTile;
