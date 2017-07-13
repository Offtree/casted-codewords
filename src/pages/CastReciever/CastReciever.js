import React, { Component } from 'react'
import { isArray } from 'lodash';
import Gameboard from '../../organisms/Gameboard';

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
      board
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
          <div>LAST EVENT: {message}</div>
        </CastedBackdrop>
      </div>
    )
  }
}

export default CastReciever