import React, { Component } from 'react'

class CastReciever extends Component {
  constructor(props) {
    super(props);
    if (window.navigator.platform !== 'MacIntel') {
      this.castMananger = window.cast.receiver.CastReceiverManager.getInstance();
      this.castMananger.start();
    }
  }
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default CastReciever