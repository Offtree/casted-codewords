import React from 'react';
import PropTypes from 'prop-types';
import KeyTile from '../../molecules/KeyTile';

const Masterboard = (props) => {
  const {
    tiles
  } = props;

  return (
    <div>
      {tiles.map( (row, i) =>
        <div key={`${i}`} style={{ display: 'flex', alignItems: 'stretch' }}>
          {row.map( (tile, b) =>
            <KeyTile
              key={`${i}-${b}`}
              position={[i, b]}
            />
          )}
        </div>
      )}
    </div>
  )
}
Masterboard.propTypes = {
  titles: PropTypes.array,
}
Masterboard.defaultProps = {
  tiles: [],
}

export default Masterboard;
