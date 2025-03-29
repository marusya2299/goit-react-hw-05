import Modal from 'react-modal';
import css from '../ImageModal/ImageModal.module.css';

export default function ImageModal({isOpen, closeModal, selectedImage}){
    console.log(selectedImage);
    return(
        <Modal
            className={css.modalOverlay}
            ariaHideApp={false}
            isOpen={isOpen}
            onRequestClose={closeModal}
            shouldCloseOnOverlayClick={true}>
                <div className={css.modalWrapper} onClick={closeModal}>
                    <div className={css.modalImage} onClick={(event) => event.stopPropagation()}>
                        <img className={css.image} src={selectedImage.urls.full} alt={selectedImage.description} />
                    </div>
                </div>
        </Modal>
    )
}