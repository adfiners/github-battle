import React, { Component, Fragment } from 'react';
import { fetchPopularRepos } from "../utils/api";
import SelectedLanguage from './SelectedLanguage';
import RepoGrid from './RepoGrid';
import Loading from './Loading';

export default class Popular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All',
      repos: null,
      isLoading: false
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage(selectedLanguage) {
    this.setState({ selectedLanguage });
    fetchPopularRepos(selectedLanguage).then(repos => {
      console.log(repos);
      this.setState({ repos });
    });
  };

  render() {
    return (
      <Fragment>
        <SelectedLanguage selectLanguage={this.state.selectedLanguage} onSelect={this.updateLanguage} />
        {(this.state.repos && !this.state.isLoading) ? <RepoGrid repos={this.state.repos} /> : <Loading />}
      </Fragment>
    )
  }
}
