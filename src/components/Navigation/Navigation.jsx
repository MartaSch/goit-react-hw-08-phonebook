import { NavLink } from "react-router-dom";
import { useAuth } from "hooks";
import css from "./Navigation.module.css";

export const Navigation = () => {
    const { isLoggedIn} = useAuth();

    return (
        <nav className={css.Navigation}>
            <NavLink className={css.NavigationLink} to="/">
                Home
            </NavLink>
            {isLoggedIn && (
                <NavLink className={css.NavigationLink} to="/contacts">
                    Contacts
                </NavLink>
            )}
        </nav>
    );
};