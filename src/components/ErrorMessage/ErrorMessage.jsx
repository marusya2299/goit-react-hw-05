import css from "../ErrorMessage/ErrorMessage.module.css";

export default function ErrorMessage(){
    return(
        <div className={css.error}>Something went wrong!</div>
    )
}