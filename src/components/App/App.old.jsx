import { Button } from 'components/Button/Button';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { fetchImg } from 'fetch';
import { Component } from 'react';
import { Wrapper } from './App.styled';
import toast from 'react-hot-toast';
import { Loader } from 'components/Loader/Loader';

export class App extends Component {
  state = {
    images: [],
    inputValue: '',
    page: 1,
    totalHits: 0,
    error: false,
    isLoading: false,
  };

  //записує значення інпута в стейт
  handleSubmit = value => {
    this.setState({
      inputValue: `${Date.now()}/${value.input}`,
      images: [],
      page: 1,
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.inputValue !== this.state.inputValue ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({ error: false, isLoading: true });
        // отримує зображення
        const foundImgs = await fetchImg(
          this.state.inputValue,
          this.state.page,
          this.state
        );
        // console.log(foundImgs.hits);
        //записали в стейт зображення
        this.setState(prevState => {
          return {
            images: [...prevState.images, ...foundImgs.hits],
            totalHits: foundImgs.totalHits,
          };
        });
      } catch (error) {
        this.setState({ error: true });
        return toast.error('Something went wrong... Try again!');
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  render() {
    return (
      <Wrapper>
        <Searchbar onSubmit={this.handleSubmit} />
        <Loader statuse={this.state.isLoading} />
        <ImageGallery imgCollection={this.state.images} />
        <Button
          onClick={this.handleLoadMore}
          gallery={this.state.images}
          total={this.state.totalHits}
        >
          Load more
        </Button>
      </Wrapper>
    );
  }
}
