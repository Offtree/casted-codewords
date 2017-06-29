import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar';
import GameOptionsIconMenu from '../../molecules/GameOptionsIconMenu';

class Header extends Component {
  render () {
    return (
      <div>
        <AppBar
          title={'Code Names'}
          iconElementRight={
            <GameOptionsIconMenu
              openDialog={this.props.openDialog}
            />
          }
        />
      </div>
    )
  }
}

export default Header