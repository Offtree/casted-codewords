import React from 'react';
import PropTypes from 'prop-types';

import GameboardContainer from '../../atoms/GameboardContainer';
import WordTile from '../../molecules/WordTile';


const Gameboard = (props) => {
  const {
    tiles
  } = props;

  return (
    <GameboardContainer>
      {tiles.map( (row, i) =>
        <div key={`${i}`} style={{ margin: 'auto' }}>
          {row.map( (tile, b) =>
            <WordTile
              key={`${i}-${b}`}
              word={tile}
              position={[i, b]}
            />
          )}
        </div>
      )}
    </GameboardContainer>
  )
}
Gameboard.propTypes = {
  titles: PropTypes.array,
}
Gameboard.defaultProps = {
  tiles: [],
}

export default Gameboard;
