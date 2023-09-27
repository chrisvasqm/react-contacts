import { ListItem } from '@chakra-ui/react';
import Contact from '../models/contact';
import ContactCard from './ContactCard';

interface Props {
  contact: Contact;
}

function ContactListItem({ contact }: Props) {
  return (
    <ListItem>
      <ContactCard contact={contact} />
    </ListItem>
  );
}

export default ContactListItem;
