import React, { Component } from 'react'
import Gameboard from '../../organisms/Gameboard';
import { buildBoard } from '../../state/board/reducer';

class CastReciever extends Component {
  constructor(props) {
    super(props);
    let receiver = false;
    if (window.navigator.platform !== 'MacIntel') {
      receiver = true;
      this.castMananger = window.cast.receiver.CastReceiverManager.getInstance();
      this.castMananger.start();
      this.messageBus = this.castReceiverManager.getCastMessageBus(
        'urn:x-cast:com.google.cast.codenames.event'
      );

      this.setUpEvents();
    }
    this.state = {
      receiver
    }
  }
  setUpEvents() {
    // handler for 'senderdisconnected' event
    this.castMananger.onSenderDisconnected = function(event) {
      console.log('Received Sender Disconnected event: ' + event.data);
      if (this.castMananger.getSenders().length === 0) window.close();
    };
    this.messageBus.onMessage = function(event) {
      console.log('Message [' + event.senderId + ']: ' + event.data);
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
          <div>
            <Gameboard
              tiles={buildBoard()}
            />
            {{message}}
          </div>: 
          this.props.children
        }
      </div>
    )
  }
}

export default CastReciever