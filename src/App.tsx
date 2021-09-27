import './App.css';
import Greet from './Components/Greet';
import Person from './Components/Person';
import PersonList from './Components/PersonList';
import Button from './Components/Props/Button';
import Container from './Components/Props/Container';
import Heading from './Components/Props/Heading';
import Input from './Components/Props/Input';
import Oscar from './Components/Props/Oscar';
import Status from './Components/Props/Status';

function App() {
  const personName = {
    first: 'Jim',
    last: 'Olsson'
  }

  // array as props
  const nameList = [
    {
      id: 1,
      first: 'Lucas',
      last: 'Steele',
    },
    {id:2,
      first: 'Lily',
      last: 'Mills',
    },
    {id:3,
      first: 'Ally',
      last: 'Jones',
    },
  ];
  return (
    <div className="App">
      <Greet name='Lily' isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status='loading' />
      <Heading>Placeholder text</Heading>
      <Oscar><Heading>The Oscar goes to Leonardo DiCaprio</Heading></Oscar>
      <Button handleClick={(event, id) => console.log('Click Me', event, id)} />
      <Input value="" handleChange={event => console.log(event)} />
      <Container styles={{ border: '1px solid black', padding: '1rem'}}/>
    </div>
  );
}

export default App;

