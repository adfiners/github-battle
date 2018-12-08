import React, { Component } from 'react';

export default class PlayerInputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ username: event.target.value });
  }

  render() {
    return (
      <form className='column' onSubmit={this.handleSubmit}>
        <label htmlFor='username'>{this.props.label}</label>
        <input
          type="text"
          id="username"
          autoComplete='off'
          value={this.state.username}
          onChange={this.handleChange}
          placeholder="Github username" />
          <button className='button' type='submit' disabled={ !this.state.username }>Submit</button>
      </form>
    )
  }
}
