import { Heading } from '@chakra-ui/react';
import data from './data/people.json';
import ContactList from './components/ContactList';
import { Outlet } from 'react-router-dom';

function App() {
  const people = data;

  return (
    <>
      <Heading>Contacts</Heading>

      <ContactList contacts={people} />
      <Outlet />
    </>
  );
}

export default App;
