import React from 'react';
import PropTypes from 'prop-types';
import WordTile from '../../molecules/WordTile';
import KeyTile from '../../molecules/KeyTile';

const Gameboard = (props) => {
  const {
    tiles,
    isCodeMaster
  } = props;

  const TileComponent = isCodeMaster ? KeyTile : WordTile;
  return (
    <div>
      {tiles.map( (row, i) =>
        <div key={`${i}`} style={{ margin: 'auto' }}>
          {row.map( (tile, b) =>
            <TileComponent
              key={`${i}-${b}`}
              word={tile}
              position={[i, b]}
            />
          )}
        </div>
      )}
    </div>
  )
}
Gameboard.propTypes = {
  titles: PropTypes.array,
  isCodeMaster: PropTypes.bool,
}
Gameboard.defaultProps = {
  tiles: [],
  isCodeMaster: false
}

export default Gameboard;
