import { Component } from 'react';
import { Toaster } from 'react-hot-toast';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImages } from './service/api';

export class App extends Component {
  state = {
    inputQuery: '',
    fetchResult: [],
    page: 1,
    totalHits: 0,
    loading: false,
    outOfImg: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.inputQuery;
    const currentQuery = this.state.inputQuery;
    const prevPage = prevState.page;
    const currentPage = this.state.page;

    if (prevQuery !== currentQuery || prevPage !== currentPage) {
      this.setState({ loading: true });

      fetchImages(currentQuery, currentPage)
        .then(data => {
          if (data.hits.length === 0) {
            this.setState({
              outOfImg: true,
            });
          }

          this.setState({
            fetchResult: [...prevState.fetchResult, ...data.hits],
            totalHits: data.totalHits,
          });
        })
        .catch(error => this.setState({ error, outOfImg: true }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  handleFormSubmit = inputQuery => {
    this.setState({
      inputQuery: inputQuery,
      fetchResult: [],
      page: 1,
      totalHits: 0,
      loading: false,
      outOfImg: false,
      error: null,
    });
  };

  onLoadMoreClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { loading, fetchResult, error, inputQuery, outOfImg, totalHits } =
      this.state;

    return (
      <>
        <div>
          <Searchbar onSubmit={this.handleFormSubmit} />

          {!inputQuery && (
            <div>
              Your images will be here. Please, enter something to search
            </div>
          )}

          {/* {loading && <div>Loading...</div>} */}
 {loading && <Loader visible={loading} />}


          {outOfImg && (
            <div textAlign="center">
              Sorry. There are no {inputQuery} images
            </div>
          )}

          {error && <h1>{error.message}</h1>}

          {fetchResult && <ImageGallery images={this.state.fetchResult} />}

          <Toaster />
        </div>

        {fetchResult.length > 0 && fetchResult.length < totalHits && (
          <Button onClick={this.onLoadMoreClick}>Load More</Button>
        )}
      </>
    );
  }
}
