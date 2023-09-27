import { ListItem } from '@chakra-ui/react';
import Contact from '../models/contact';

interface Props {
  contact: Contact;
}

function ContactListItem({ contact }: Props) {
  return <ListItem>{contact.name}</ListItem>;
}

export default ContactListItem;
