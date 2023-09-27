import { List } from '@chakra-ui/react';
import Contact from '../models/contact';
import ContactListItem from './ContactListItem';

interface Props {
  contacts: Contact[];
}

function ContactList({ contacts }: Props) {
  if (contacts.length === 0) return <p>No contacts to show.</p>;

  return <List>{contacts && contacts.map(contact => <ContactListItem contact={contact} />)}</List>;
}

export default ContactList;
