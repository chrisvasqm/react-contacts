import { Heading } from '@chakra-ui/react';
import data from './data/people.json';
import ContactList from './components/ContactList';

function App() {
  const people = data;

  return (
    <>
      <Heading>Contacts</Heading>

      <ContactList contacts={people} />
    </>
  );
}

export default App;
