import PropTypes from 'prop-types';
import { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
import { toast } from 'react-hot-toast';
import { Header, SearchForm, SearchButton, Input } from './Searchbar.styled';

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
      <Header>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <BsSearch />
          </SearchButton>

          <Input
            type="text"
            placeholder="Search images and photos"
            value={this.state.inputQuery}
            onChange={this.handleInputChange}
          />
        </SearchForm>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
