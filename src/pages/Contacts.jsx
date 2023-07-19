import ContactForm from 'components/ContactsForm/ContactsForm';
import ContactList from 'components/ContactList/ContactList';
import { nanoid } from 'nanoid';
import Filter from 'components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contacts/contactsSelector';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operation';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ContactForm />
      {isLoading && !error && <p>Request in progress...</p>}
      <Filter />
      <ContactList key={nanoid()} />
    </div>
  );
}

export default Contacts;