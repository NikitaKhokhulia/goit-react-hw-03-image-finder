import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { Container } from './App.styled';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

export default class App extends Component {
  state = {
    image: null,
  };

  componentDidMount() {
    fetch(
      'https://pixabay.com/api/?q=cat&page=1&key=32602486-88d6814d0d09c23868840d0fe&image_type=photo&orientation=horizontal&per_page=12'
    )
      .then(res => res.json())
      .then(console.log);
  }

  render() {
    return (
      <>
        <Container>
          <Searchbar></Searchbar>
          <ImageGallery>
            <ImageGalleryItem />
          </ImageGallery>
        </Container>
      </>
    );
  }
}
