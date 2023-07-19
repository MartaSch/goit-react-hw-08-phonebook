import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/ContactsSlice';
const Filter = () => {
  const dispatch = useDispatch();
  const handleFilter = e => dispatch(changeFilter(e.currentTarget.value));

  return (
    <>
      <h2 className={css.contactsTitle}>Contacts:</h2>
      <p className={css.filterTitle}>Find contact by name:</p>
      <input
        className={css.inputFilter}
        type="text"
        name="filter"
        onChange={handleFilter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
    </>
  );
};
Filter.propTypes = {
  handleFilter: PropTypes.func,
};
export default Filter;
