import React, { Component } from 'react';

export default class Popular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectLanguage: 'All'
    };
    this.selectLanguage = this.selectLanguage.bind(this);
  }
  selectLanguage(selectLanguage) {
    this.setState({ selectLanguage })
  };

  render() {
    const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
    return (
      <ul className='languages'>
        {languages.map(( language, index ) => (
            <li style={ this.state.selectLanguage === language ? { color: '#d0021b' } : null }
            key={index}
            onClick={this.selectLanguage.bind(null, language)}>
              { language }
            </li>
          )
        )}
      </ul>
    )
  }
}
