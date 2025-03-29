import css from "../ImageCard/ImageCard.module.css";
import { GoPerson, GoMention, GoHeart } from "react-icons/go";

export default function ImageCard({image, openModal}){

    return(
        <li onClick={() => openModal(image)} className={css.item}>
            <img className={css.image} src={image.urls.regular} alt={image.description} />
            <div className={css.description}>
                <div className={css.iconText}>
                    <GoPerson />
                    <p className={css.userName}>{image.user.name}</p>
                </div>
                <div className={css.iconText}>
                    <GoMention />
                    <p className={css.userName}>{image.user.username}</p>
                </div>
                <div className={css.iconText}>
                    <GoHeart />
                    <p className={css.userName}>{image.likes}</p>
                </div>
            </div>
        </li>
    )
}