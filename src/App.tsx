import { Box, Flex, Heading } from '@chakra-ui/react';
import data from './data/people.json';
import ContactList from './components/ContactList';
import { Outlet } from 'react-router-dom';

function App() {
  const people = data;

  return (
    <>
      <Heading>Contacts</Heading>

      <Flex >
        <Box flex={1}>
          <ContactList contacts={people} />
        </Box>
        <Box flex={4}>
          <Outlet />
        </Box>
      </Flex>
    </>
  );
}

export default App;
