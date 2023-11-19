import { List } from '@chakra-ui/react';
import Contact from '../models/contact';
import ContactListItem from './ContactListItem';
import { Link } from 'react-router-dom';

interface Props {
  contacts: Contact[];
}

function ContactList({ contacts }: Props) {
  if (contacts.length === 0) return <p>No contacts to show.</p>;

  return <List>{contacts && contacts.map(contact => <Link to={`contacts/${contact.id}`}><ContactListItem key={contact.id} contact={contact} /></Link>)}</List>;
}

export default ContactList;
