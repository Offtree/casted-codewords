import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { isArray } from 'lodash';
import Dialog from 'material-ui/Dialog';

import Gameboard from '../../organisms/Gameboard';
import GameInformation from '../../molecules/GameInformation';
import CastedBackdrop from '../../atoms/CastedBackdrop';
class CastReciever extends Component {

  constructor(props) {
    super(props);
    this.CastReceiverManager = window.cast.receiver.CastReceiverManager.getInstance();
    this.setUpEvents();
    this.CastReceiverManager.start();
  
    this.state = {
      message: 'None Yet'
    };
  }

  setUpEvents() {
    this.messageBus = this.CastReceiverManager.getCastMessageBus(
      'urn:x-cast:com.google.cast.codenames.action'
    );

    // handler for 'senderdisconnected' event
    this.CastReceiverManager.onSenderDisconnected = function(event) {
      if (this.CastReceiverManager.getSenders().length === 0) window.close();
    };
    
    // handler for messageBus
    this.messageBus.onMessage = (event) => {
      this.setState({
        message: JSON.stringify(event.data)
      });
      this.props.dispatchSenderEvent(JSON.parse(event.data));
    }
  }

  render () {
    const {
      message
    } = this.state;

    const {
      board,
      helpDialogOpen
    } = this.props;

    return (
      <div>
        <CastedBackdrop>
          { board !== null ?
            <Gameboard
              tiles={board}
            /> :
            <div> Start a game!</div>
          }

          <Dialog
            title="Game Description"
            open={helpDialogOpen}
          >
            <GameInformation/>
          </Dialog>
          <div>LAST EVENT: {message}</div>
        </CastedBackdrop>
      </div>
    )
  }
}

CastReciever.propTypes = {
  helpDialogOpen: PropTypes.bool,
  board: PropTypes.array,
};

CastReciever.defaultProps = {
  helpDialogOpen: false,
  board: null
};

export default CastReciever