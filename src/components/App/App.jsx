import { Button } from 'components/Button/Button';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { fetchImg } from 'fetch';
import { useEffect, useState } from 'react';
import { Wrapper } from './App.styled';
import toast from 'react-hot-toast';
import { Loader } from 'components/Loader/Loader';

export const App = () => {
  const [images, setImages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(0);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = value => {
    setInputValue(`${Date.now()}/${value.input}`);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  useEffect(() => {
    if (inputValue) {
      async function getImages() {
        try {
          setError(false);
          setIsLoading(true);
          const foundImgs = await fetchImg(inputValue, page);
          console.log(foundImgs.hits);
          setImages(prevState => [...prevState, ...foundImgs.hits]);
          setTotalHits(foundImgs.totalHits);
        } catch (mistake) {
          setError(true);
          console.log(error);

          return toast.error('Something went wrong... Try again!');
        } finally {
          setIsLoading(false);
        }
      }

      getImages();
    }
  }, [inputValue, page]);

  return (
    <Wrapper>
      <Searchbar onSubmit={handleSubmit} />
      <Loader statuse={isLoading} />
      <ImageGallery imgCollection={images} />
      <Button onClick={handleLoadMore} gallery={images} total={totalHits}>
        Load more
      </Button>
    </Wrapper>
  );
};
