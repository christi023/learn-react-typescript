import './App.css';
import Greet from './Components/Greet';
import Person from './Components/Person';
import PersonList from './Components/PersonList';

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
      <Greet name='Lily' messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList}/>
    </div>
  );
}

export default App;

