import React, { Component } from 'react'
import Gameboard from '../../organisms/Gameboard';
import { buildBoard } from '../../state/board/reducer';

import CastedBackdrop from '../../atoms/CastedBackdrop';
class CastReciever extends Component {
  constructor(props) {
    super(props);
    this.castMananger = window.cast.receiver.CastReceiverManager.getInstance();
    this.messageBus = this.castMananger.getCastMessageBus(
      'urn:x-cast:com.google.cast.codenames.action'
    );
    this.castMananger.start();
    this.setUpEvents();
  
    this.state = {
      message: 'None Yet'
    };
  }

  setUpEvents() {
    // handler for 'senderdisconnected' event
    this.castMananger.onSenderDisconnected = function(event) {
      if (this.castMananger.getSenders().length === 0) window.close();
    };
    
    // handler for messageBus
    this.messageBus.onMessage = function(event) {
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