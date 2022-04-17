import { Component } from 'react'
import './index.css';
import { Searchbar } from './components/Searchbar/Searchbar.js'
import { Loader } from 'components/Loader/Loader';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Button } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';
import api from './components/Services/API.js'

export class App extends Component {
  state = {
    pictures: [],
    value: null,
    error: null,
    page: 0,
    status: 'idle',
    showModal: false,
    modalItem: [],
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      this.setState({pictures: []});
      this.fetchPics();
    }
    else {
      return
    }
  };

  updateQuery = value => {
      this.setState(prevState => {
      if (prevState !== value) {
        return {
          page: 1,
          value: value,
        }
      }
      return { value: value }
    })
  }
  

  createArr = value => {
    const newArr = value.map(({ id, webformatURL, largeImageURL }) => {
      return { id: id, webformatURL: webformatURL, largeImageURL: largeImageURL }
    })
    this.setState(prevState => {
      return {
        pictures: [...prevState.pictures, ...newArr],
        status: 'resolved',
      }
    })
  }

  fetchPics = async () => {
    const { value, page } = this.state;
    this.setState({ status: 'pending' });
    
    try {
      const pictures = await api.fetchPicturesWithQuery(value, page);
      console.log(pictures[0])

      this.setState({
        status: 'resolved',
      })
      this.createArr(pictures)

    } catch (error) {
       console.log(error)
       this.setState({
       error: error,
       status: 'rejected'
       })
      
   } finally {
     this.setState(({ page }) => {
       return {
        page: page + 1
       }
     })
   }
  }

  addModalWindow = id => {
    const findId = this.state.pictures.find(item => item.id === id)

    this.setState({ modalItem: findId });
    this.toggleModal();
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    const { pictures, status, value, showModal, modalItem } = this.state;

    return (
      <>
        {showModal && 
          <Modal onOpen={modalItem} onClose={this.toggleModal} />
        }
          
        <Searchbar submit={this.updateQuery} />
        
        <ImageGallery>
          <ImageGalleryItem pictures={pictures} modal={this.addModalWindow} />
        </ImageGallery>

        {status === 'pending' && (
          <Loader />
        )}
        {!value && 
         <h2 className='welcome__message'>Start typing to find pictures...</h2>
        }
        {pictures.length > 0 && (
          <Button loadMorePictures={this.fetchPics}/>
        )}
      </>
    );
  }
};
