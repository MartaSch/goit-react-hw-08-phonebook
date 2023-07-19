import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css'
export const AuthNav = () => {
  return (
    <div className={css.AuthNav}>
      <NavLink className={css.AuthNavLink} to="/register">Register</NavLink>
      <NavLink className={css.AuthNavLink} to="/login">Log In</NavLink>
    </div>
  );
};
