import { Heading, List, ListItem } from '@chakra-ui/react';
import data from './data/people.json';

function App() {
  const people = data;

  return (
    <>
      <Heading>Contacts</Heading>

      <List>{people && people.map(person => <ListItem>{person.name}</ListItem>)}</List>
    </>
  );
}

export default App;
