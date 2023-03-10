import { Component } from 'react';
import { toast } from 'react-hot-toast';

export class Searchbar extends Component {
  state = {
    inputQuery: '',
  };

  handleInputChange = event => {
    this.setState({ inputQuery: event.currentTarget.value.toLowerCase() });
  };



  handleSubmit = event => {
    event.preventDefault();

    if (this.state.inputQuery.trim() === '') {
        

     toast('Please, enter something to search');
      return 
    }

    this.props.onSubmit(this.state.inputQuery);
    this.setState({ inputQuery: '' });
  };




  render() {
    return (
      <header class="searchbar">
        <form class="form" onSubmit={this.handleSubmit}>
          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>

          <input
            class="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            value={this.state.inputQuery}
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}
