import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/AuthOperation';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <form className={css.LoginForm} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.LoginLabel}>
          Email
          <input className={css.InputLogin} type="email" name="email" />
        </label>
        <label className={css.LoginLabel}>
          Password
          <input className={css.InputLogin} type="password" name="password" />
        </label>
        <button className={css.LoginButton} type="submit">Log In</button>
      </form>
    </>
  );
};
