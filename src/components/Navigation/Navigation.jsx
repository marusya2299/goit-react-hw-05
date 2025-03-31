import { NavLink } from 'react-router-dom';
import css from '../../components/Navigation/Navigation.module.css';

export default function Navigation(){
    return(
    <nav className={css.navigation}>
      <NavLink className={css.elementNavigation} to="/" >Home</NavLink>
      <NavLink className={css.elementNavigation} to="/movies">Movies</NavLink>
    </nav>
    )
}