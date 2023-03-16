
import PropTypes from 'prop-types';
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

    if (this.state.inputQuery.trim().replaceAll(/\s+/g, '+') === '') {
      toast('Please, enter something to search');
      return;
    }

    this.props.onSubmit(this.state.inputQuery);
    this.setState({ inputQuery: '' });
  };

  render() {
    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            type="text"
           
            placeholder="Search images and photos"
            value={this.state.inputQuery}
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes =  {
 onSubmit: PropTypes.func.isRequired,
};


