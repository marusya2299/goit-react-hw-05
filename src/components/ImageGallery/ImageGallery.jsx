import ImageCard from "../ImageCard/ImageCard";
import css from "../ImageGallery/ImageGallery.module.css";

export default function ImageGallery({images, openModal}){

    return(
        <ul className={css.list}>
            {images.map(image => 
                <ImageCard key={image.id} image={image} openModal={() => openModal(image)} />
            )}
        </ul>
    )
}