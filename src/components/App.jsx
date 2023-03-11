import { Component } from 'react';
import { Toaster} from 'react-hot-toast';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImages } from './service/api';

export class App extends Component {
  state = {
    inputQuery: '',
    fetchResult: [],
    page: 1,
    totalResults: 0,
    loading: false,
    availableImages: false,
    error: null,
  };

  handleFormSubmit = inputQuery => {
    this.setState({ inputQuery });
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.inputQuery;
    const currentQuery = this.state.inputQuery;
    const prevPage = prevState.page;
    const currentPage = this.state.page;

    if (prevQuery !== currentQuery || prevPage !== currentPage) {
      this.setState({ loading: true });

      fetchImages(currentQuery)
        .then(data =>
          this.setState({
            fetchResult: [...prevState.fetchResult, ...data.hits],
          })
        )
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    const { loading, fetchResult, error } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {error && <h1>{error.message}</h1>}

        {loading && <div>Loading...</div>}

        {fetchResult && <ImageGallery images={this.state.fetchResult} />}

        <Toaster />
      </div>
    );
  }
}


