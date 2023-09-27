import Contact from '../models/contact';
import { Text, Image, HStack, VStack } from '@chakra-ui/react';

interface Props {
  contact: Contact;
}

function ContactCard({ contact }: Props) {
  return (
    <HStack padding={2}>
      <Image
        width={'75px'}
        aspectRatio={4 / 4}
        objectFit={'cover'}
        borderRadius={'full'}
        src={contact.image}
      />
      <VStack align={'start'}>
        <Text fontWeight={'bold'}>{contact.name}</Text>
        <Text>Sample message</Text>
      </VStack>
    </HStack>
  );
}

export default ContactCard;
