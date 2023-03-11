import { Component } from 'react';
import { Toaster } from 'react-hot-toast';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    inputQuery: '',
    fetchResult: [],
    page: 1,
    loading: false,
  };

  handleFormSubmit = inputQuery => {
    console.log(inputQuery);
    this.setState({ inputQuery });
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.inputQuery;
    const currentQuery = this.state.inputQuery;
    const prevPage = prevState.page;
    const currentPage = this.state.page;

    if (prevQuery !== currentQuery || prevPage !== currentPage) {
      this.setState({ loading: true });
      fetch(
        `https://pixabay.com/api/?q=${this.state.inputQuery}&page=1&key=33084667-f5fdd61fd2318acf30785d2ee&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => response.json())
        .then(data => this.setState({ fetchResult: data.hits }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    const { loading, inputQuery, fetchResult } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {loading && <div>Loading...</div>}
        {!inputQuery && <div>Enter Search</div>}
        {fetchResult && <ImageGallery images={this.state.fetchResult} />}

        <Toaster />
      </div>
    );
  }
}
