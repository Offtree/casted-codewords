import React from 'react';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const GameOptionsIconMenu = ({ newGame, openDialog }) => (
  <IconMenu
    iconButtonElement={
      <IconButton><MoreVertIcon color={ 'white' } /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="New Game" onClick={newGame}/>
    <MenuItem primaryText="Help" onClick={openDialog}/>
  </IconMenu>
);

export default GameOptionsIconMenu;
