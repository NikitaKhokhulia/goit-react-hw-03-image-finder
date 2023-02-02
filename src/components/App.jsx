import { Component } from 'react';
import { Container } from './App.styled';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

export default class App extends Component {
  state = {
    images: [],
    searchValue: '',
    loading: false,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchValue !== this.state.searchValue || this.state.page !== prevState.page) {
      this.setState({ loading: true });
      setTimeout(() => {
        fetch(
          `https://pixabay.com/api/?q=${this.state.searchValue}&page=${this.state.page}&key=32602486-88d6814d0d09c23868840d0fe&image_type=photo&orientation=horizontal&per_page=12`
        )
          .then(res => res.json())
          .then(data =>
            this.setState({
              images: [...this.state.images, ...data.hits],
            })
          )
          .finally(() => this.setState({ loading: false }));
      }, 1000);
    }
  }

  handleFormSubmit = data => {
    this.setState({ images: [], page:1, searchValue: data });
  };

  render() {
    return (
      <>
        <Container>
          <Searchbar onSubmit={this.handleFormSubmit} />

          {this.state.loading && <div>Download</div>}

          <ImageGallery images={this.state.images}></ImageGallery>
        </Container>

        <button>Load More</button>
      </>
    );
  }
}
