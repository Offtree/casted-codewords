import React, { Component } from 'react'
import Gameboard from '../Gameboard';
import { buildBoard } from '../../state/board/reducer';

class CastReciever extends Component {
  constructor(props) {
    super(props);
    let receiver = false;
    if (window.navigator.platform !== 'MacIntel') {
      receiver = true;
      this.castMananger = window.cast.receiver.CastReceiverManager.getInstance();
      this.castMananger.start();
    }
    this.state = {
      receiver
    }
  }
  render () {
    const {
      receiver
    } = this.state;
    return (
      <div>
        {receiver ? 
          <div>
            <Gameboard
              tiles={buildBoard()}
            />
          </div>: 
          this.props.children
        }
      </div>
    )
  }
}

export default CastReciever