import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {

  state = {
  query: ''
}


  handleFormSubmit = query => {
    console.log(query);
    this.setState({ query })
  };

  render() {
    return (
      <div>
        <Searchbar onFormSubmit={this.handleFormSubmit} />
      </div>
    );
  }
}
