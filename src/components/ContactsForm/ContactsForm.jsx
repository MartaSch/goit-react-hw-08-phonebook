import PropTypes from 'prop-types';
import { useState } from 'react';
import css from './ContactsForm.module.css';
import { nanoid } from 'nanoid';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operation';
import { selectContacts } from 'redux/contacts/contactsSelector';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleInput = evt => {
    const { name, value } = evt.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    const nameContacts = contacts.find(contact => contact.name === name);
    if (nameContacts) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(addContact(newContact));
    }
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <h1 className={css.phonebookTitle}>Phonebook</h1>
      <div className={css.borderContainer}>
        <form className={css.contactsForm} onSubmit={handleSubmit}>
          <label htmlFor={nanoid()} className={css.label}>
            Name
            <input
              id={nanoid()}
              className={css.input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={name}
              onChange={handleInput}
              required
            />
          </label>
          <label htmlFor={nanoid()} className={css.label}>
            Number
            <input
              id={nanoid()}
              className={css.input}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              value={number}
              onChange={handleInput}
              required
            />
          </label>
          <button className={css.addButton} type="submit">
            Add contact
          </button>
        </form>
      </div>
    </>
  );
};

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};

export default ContactForm;
