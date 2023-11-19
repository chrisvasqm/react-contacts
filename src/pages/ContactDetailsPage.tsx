import { HStack, Image, VStack, Text, Card } from '@chakra-ui/react';
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

  return <Card>
    <HStack padding={2}>
      <Image
        width={'200px'}
        aspectRatio={4 / 4}
        objectFit={'cover'}
        borderRadius={'full'}
        src={contact.image}
      />
      <VStack align={'left'}>
        <Text>ID: {contact.id}</Text>
        <Text>Name: {contact.name}</Text>
      </VStack>
    </HStack>
  </Card>
}

export default ContactDetailsPage;
