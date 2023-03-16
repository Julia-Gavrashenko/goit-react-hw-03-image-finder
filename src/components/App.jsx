import { Component } from 'react';
import { Toaster } from 'react-hot-toast';
import { Button } from './Button/Button';
import { GlobalStyle } from './GlobalStyle';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
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
    showModal: false,
    url: '',
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

          this.setState(prevState => ({
            fetchResult: [...prevState.fetchResult, ...data.hits],
            totalHits: data.totalHits,
          }));
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
      url: '',
    });
  };

  onLoadMoreClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  toggleModal = url => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      url: url,
    }));
  };

  render() {
    const {
      loading,
      fetchResult,
      error,
      inputQuery,
      outOfImg,
      totalHits,
      showModal,
      url,
    } = this.state;

    return (
      <>
        <GlobalStyle />
        <div>
          <Searchbar onSubmit={this.handleFormSubmit} />

          {!inputQuery && (
            <div>
              Your images will be here. Please, enter something to search
            </div>
          )}

          {loading && <Loader visible={loading} />}

          {outOfImg && <div>Sorry. There are no {inputQuery} images</div>}

          {error && <h1>{error.message}</h1>}

          {fetchResult && (
            <ImageGallery
              images={this.state.fetchResult}
              onModal={this.toggleModal}
            />
          )}

          {showModal && <Modal onClose={this.toggleModal} url={url} />}

          <Toaster />
        </div>

        {fetchResult.length > 0 && fetchResult.length < totalHits && (
          <Button onClick={this.onLoadMoreClick}>Load More</Button>
        )}
      </>
    );
  }
}

// toggleModal = () => {
//   this.setState(prevState => ({ showModal: !prevState.showModal,  }));
// };
