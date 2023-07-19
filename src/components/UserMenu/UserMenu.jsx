import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/AuthOperation";
import { useAuth } from "hooks/useAuth";
import css from "./UserMenu.module.css"
export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <div className={css.UserName}>
            <p>Welcome, {user.name}</p>
            <button className={css.Button} type="button" onClick={() => dispatch(logOut())}>
                Logout
            </button>
        </div>
    );
};