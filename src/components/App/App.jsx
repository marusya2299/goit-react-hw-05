import { useState } from 'react';

import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery.jsx';
import Loader from '../Loader/Loader.jsx';
import ErrorMessage from '../ErrorMessage/ErrorMessage.jsx';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn.jsx';
import ImageModal from '../ImageModal/ImageModal.jsx';

import { fetchArticlesWithTopic } from "../../articles-api.js";

export default function App(){

  const quantityImages = 4;
  const [articles, setArticles] = useState([]);
  const [visibleArticles, setVisibleArticles] = useState(quantityImages);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSearch = async (search) => {
    try{
      setArticles([]);
      setVisibleArticles(quantityImages);
      setError(false);
      setLoading(true);
      
      const data = await fetchArticlesWithTopic(search);
      setArticles(data);
    }
    catch{
      setError(true);
    }
    finally{
      setLoading(false);
    }
  };

  const loadMore = () => {
    setVisibleArticles(prev => prev + quantityImages);
  }

  function openModal(image) {
    setSelectedImage(image);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  
  return(
    <>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage />}
      
      {articles.length > 0 && 
      <> 
        <ImageGallery images={articles.slice(0, visibleArticles)} openModal={openModal} /> 
        {modalIsOpen && <ImageModal isOpen={modalIsOpen} closeModal={closeModal} selectedImage={selectedImage} />}
      </>
     }
      {loading && <Loader />}
      {articles.length > visibleArticles && !loading && (<LoadMoreBtn loadMore={loadMore} />)}
    </>
  )

}