import { Link } from 'react-router-dom';
import css from '../../components/Navigation/Navigation.module.css';

export default function Navigation(){
    return(
    <nav className={css.navigation}>
      <Link className={css.elementNavigation} to="/" >Home</Link>
      <Link className={css.elementNavigation} to="/movies">Movies</Link>
    </nav>
    )
}