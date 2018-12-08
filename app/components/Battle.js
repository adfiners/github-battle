import React, { Component } from 'react';
import PlayerInput from './PlayerInput';

export default class Battle extends Component {
  render() {
    return (
      <div className='row'>
        <PlayerInput label='PlayerOne' />
        <PlayerInput label='PlayerTwo' />
      </div>
    )
  }
}
