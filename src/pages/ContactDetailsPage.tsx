import { Heading } from '@chakra-ui/react';
import Contact from '../models/contact';
import { useParams } from 'react-router-dom';

interface Props {
  contacts: Contact[];
}

function ContactDetailsPage({ contacts }: Props) {
  const { id } = useParams<{ id: string }>();
  if (!id) return <div>Invalid ID.</div>

  const contact = contacts.find(c => c.id === parseInt(id, 10));
  if (!contact) return <div>Contact not found.</div>

  return <div>
    <Heading>Details</Heading>
    <div>ID: {contact.id}</div>
    <div>Name: {contact.name}</div>
  </div>;
}

export default ContactDetailsPage;
