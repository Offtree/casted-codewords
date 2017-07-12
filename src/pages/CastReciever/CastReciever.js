import React, { Component } from 'react'
import Gameboard from '../../organisms/Gameboard';
import { buildBoard } from '../../state/board/reducer';

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
    this.messageBus = this.castMananger.getCastMessageBus(
      'urn:x-cast:com.google.cast.codenames.action'
    );

    // handler for 'senderdisconnected' event
    this.CastReceiverManager.onSenderDisconnected = function(event) {
      if (this.CastReceiverManager.getSenders().length === 0) window.close();
    };
    
    // handler for messageBus
    this.messageBus.onMessage = (event) => {
      this.messageBus.send(event.senderId, event.data);
      this.dispatch(event.data);
      this.setState({
        message: event.data
      });
    }
  }
  render () {
    const {
      message
    } = this.state;

    return (
      <div>
        <CastedBackdrop>
          <Gameboard
            tiles={buildBoard()}
          />
          <div>{message}</div>
        </CastedBackdrop>
      </div>
    )
  }
}

export default CastReciever