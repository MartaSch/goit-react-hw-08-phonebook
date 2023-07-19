import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/AuthOperation';
import css from './RegisterForm.module.css';
export const RegisterForm = () => {
  
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value
      })
    );
  form.reset();
  };

  return (
    <form className={css.RegisterForm} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.RegisterLabel}>
        Username
        <input className={css.InputRegister} type="text" name="name" />
      </label>
      <label className={css.RegisterLabel}>
        Email
        <input className={css.InputRegister} type="email" name="email" />
      </label>
      <label className={css.RegisterLabel}>
        Password
        <input className={css.InputRegister} type="password" name="password" />
      </label>
      <button className={css.RegisterButton} type="submit">Register</button>
    </form>
  );
};
