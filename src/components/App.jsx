import { Component } from 'react';
import  { Toaster } from 'react-hot-toast';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    inputQuery: '',
    fetchResult: []
  };

  handleFormSubmit = inputQuery => {
    console.log(inputQuery);
    this.setState({ inputQuery });
  };


  componentDidUpdate(prevProps, prevstate) {
    if (prevstate.inputQuery !== this.state.inputQuery) {
      fetch(`https://pixabay.com/api/?q=&{this.state.inputQuery}&page=1&key=33084667-f5fdd61fd2318acf30785d2ee&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => response.json())
      .then(fetchResult => this.setState({fetchResult}))
    }
  }

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={this.state.fetchResult } />
        <Toaster />
      </div>
    );
  }
}
