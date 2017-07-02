import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';

import Masterboard from '../../organisms/Masterboard';
import Header from '../../organisms/Header';
import MainActionButton from '../../organisms/MainActionButton';
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
        <Header />
        <Masterboard
          tiles={tiles}
          goals={goals}
        />

        <MainActionButton 
          openDialog={this.handleDescriptionDialogOpen}
        />
        <button is="google-cast-button" style={{ height: 30, width: 30 }}></button>

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
