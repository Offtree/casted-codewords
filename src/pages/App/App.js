import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';

import Gameboard from '../../organisms/Gameboard';
import Masterboard from '../../organisms/Masterboard';
import Header from '../../organisms/Header';
import GameInformation from '../../molecules/GameInformation';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleDescriptionDialogClose = this.handleDescriptionDialogClose.bind(this);
    this.handleDescriptionDialogOpen = this.handleDescriptionDialogOpen.bind(this);

    this.state = {
      descriptionDialogOpen: false
    }
  }

  handleDescriptionDialogClose() {
    this.setState({
      descriptionDialogOpen: false
    })
  }

  handleDescriptionDialogOpen() {
    this.setState({
      descriptionDialogOpen: true
    })
  }

  render () {
    const {
      tiles,
      goals,
    } = this.props;
    const {
      descriptionDialogOpen
    } = this.state;
    return (
      <div>
        <Header
          openDialog={this.handleDescriptionDialogOpen}
        />
        <Masterboard
          tiles={tiles}
          goals={goals}
        />
        <Gameboard
          tiles={tiles}
          goals={goals}
        />
        <Paper>
          <button is="google-cast-button" style={{ height: 50, width: 50 }}></button>
        </Paper>

        <Dialog
          title="Game Description"
          open={descriptionDialogOpen}
          onRequestClose={this.handleDescriptionDialogClose}
        >
          <GameInformation/>
        </Dialog>
      </div>
    );
  }
}
App.propTypes = {
  startGame: PropTypes.func,
  tiles: PropTypes.array,
  goals: PropTypes.object,
}
App.defaultProps = {
  startGame(){},
  tiles: []
}

export default App;
