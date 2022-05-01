import { Component } from 'react';
import './index.css';
import { Searchbar } from './components/Searchbar/Searchbar.js';
import { Loader } from 'components/Loader/Loader';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';
import api from './services/API.js';

export class App extends Component {
  state = {
    pictures: [],
    value: null,
    error: null,
    page: 0,
    status: 'idle',
    showModal: false,
    modalItem: [],
    showLoadMore: false,
    totalHits: 0,
  };

  componentDidUpdate(prevProps, { value, page }) {
    if (page !== this.state.page || value !== this.state.value) {
      if (this.state.totalHits - 12 <= 0) {
        this.setState({ showLoadMore: false });
      }
      this.fetchPics();
    } else {
      return;
    }
  }

  updateQuery = value => {
    this.setState({ pictures: [] });
    this.setState(prevState => {
      if (prevState !== value) {
        return {
          page: 1,
          value: value,
        };
      }
      return { value: value };
    });
  };

  createArr = value => {
    const newArr = value.map(({ id, webformatURL, largeImageURL }) => {
      return {
        id: id,
        webformatURL: webformatURL,
        largeImage: largeImageURL,
      };
    });
    this.setState(prevState => {
      return {
        pictures: [...prevState.pictures, ...newArr],
        status: 'resolved',
      };
    });
  };
  pageIncrement = () => {
    this.setState(({ page }) => {
      return {
        page: page + 1,
      };
    });
  };
  fetchPics = async () => {
    const { value, page } = this.state;
    this.setState({
      status: 'pending',
      showLoadMore: true,
    });

    try {
      const pictures = await api.fetchPicturesWithQuery(value, page);
      this.setState({
        status: 'resolved',
        totalHits: pictures.totalHits,
      });

      this.createArr(pictures.hits);
    } catch (error) {
      this.setState({
        error: error,
        status: 'rejected',
      });
    }
  };

  addModalWindow = id => {
    const findId = this.state.pictures.find(item => item.id === id);
    this.setState({ modalItem: findId });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    const {
      pictures,
      status,
      value,
      showModal,
      modalItem,
      showLoadMore,
      totalHits,
    } = this.state;
    const { toggleModal, updateQuery, addModalWindow, pageIncrement } = this;
    return (
      <>
        {showModal && <Modal onOpen={modalItem} onClose={toggleModal} />}

        <Searchbar submit={updateQuery} />

        <ImageGallery pictures={pictures} onOpenModal={addModalWindow} />
        {status === 'idle' && (
          <h2 className="welcome__message">Start typing to find pictures...</h2>
        )}
        {status === 'pending' && <Loader />}
        {status === 'resolved' && pictures.length === 0 && (
          <h2 className="error__message">
            No results found for '{value}' request!
          </h2>
        )}

        {status === 'resolved' &&
          pictures.length !== totalHits &&
          showLoadMore && <Button loadMorePictures={pageIncrement} />}
      </>
    );
  }
}
