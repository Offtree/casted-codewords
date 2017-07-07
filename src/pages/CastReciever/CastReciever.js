import React, { Component } from 'react'
import Gameboard from '../../organisms/Gameboard';
import { buildBoard } from '../../state/board/reducer';

import CastedBackdrop from '../../atoms/CastedBackdrop';
class CastReciever extends Component {
  constructor(props) {
    super(props);
    let receiver = false;
    if (window.navigator.platform === 'Linux armv71') {
      receiver = true;
      this.castMananger = window.cast.receiver.CastReceiverManager.getInstance();
      this.castMananger.start();
      this.messageBus = this.castReceiverManager.getCastMessageBus(
        'urn:x-cast:com.google.cast.codenames.event'
      );
      this.setUpEvents();
    };
    this.state = {
      receiver
    }
  }
  setUpEvents() {
    // handler for 'senderdisconnected' event
    this.castMananger.onSenderDisconnected = function(event) {
      if (this.castMananger.getSenders().length === 0) window.close();
    };

    this.messageBus.onMessage = function(event) {
      this.messageBus.send(event.senderId, event.data);
      this.setState({
        message: event.data
      });
    }
  }
  render () {
    const {
      receiver,
      message
    } = this.state;

    return (
      <div>
        {receiver ? 
          <CastedBackdrop>
            {message ?
              <Gameboard
                tiles={buildBoard()}
              /> :
              "Start a game!"
            }
          </CastedBackdrop>: 
          this.props.children
        }
      </div>
    )
  }
}

export default CastReciever