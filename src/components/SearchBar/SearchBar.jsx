import css from "../SearchBar/SearchBar.module.css";
import toast, {Toaster} from 'react-hot-toast';

export default function SearchBar({onSubmit}){

    const handleSubmit = (event) => {
        event.preventDefault();
        const search = event.target.elements.search.value.trim();
    
        search === "" ?  toast.error("Please enter data"): onSubmit(search);

        event.target.reset();
    }

return(
    <header className={css.box}>
        <form className={css.form} onSubmit={handleSubmit}>
            <input
                className={css.input}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                name="search"
            />
            <button className={css.button} type="submit">Search</button>
        </form>
        <Toaster />
    </header>
  )
}