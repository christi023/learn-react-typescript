import './App.css';
import User from './Components/State/User';
import ThemeContextProvider from './Components/Context/ThemeContext';
import UserContextProvider from './Components/Context/UserContext';
import Greet from './Components/Greet';
import Person from './Components/Person';
import PersonList from './Components/PersonList';
import Button from './Components/Props/Button';
import Container from './Components/Props/Container';
import Heading from './Components/Props/Heading';
import Input from './Components/Props/Input';
import Oscar from './Components/Props/Oscar';
import Status from './Components/Props/Status';
import User1 from './Components/Context/User';
import Counter from './Components/Class/Counter';
import Private from './Components/Auth/Private';
import Profile from './Components/Auth/Profile';
import List from './Components/Generics/List';
import RandomNumber from './Components/Restriction/RandomNumber';
import Toast from './Components/TemplateLiterals/Toast';
import CustomButton from './Components/Html/Button';

function App() {
  const personName = {
    first: 'Jim',
    last: 'Olsson',
  };

  // array as props
  const nameList = [
    {
      id: 1,
      first: 'Lucas',
      last: 'Steele',
    },
    { id: 2, first: 'Lily', last: 'Mills' },
    { id: 3, first: 'Ally', last: 'Jones' },
  ];
  return (
    <>
      <div className="App">
        <Greet name="Lily" isLoggedIn={true} />
        <Person name={personName} />
        <PersonList names={nameList} />
        <Status status="loading" />
        <Heading>Placeholder text</Heading>
        <Oscar>
          <Heading>The Oscar goes to Leonardo DiCaprio</Heading>
        </Oscar>
        <Button handleClick={(event, id) => console.log('Click Me', event, id)} />
        <Input value="" handleChange={(event) => console.log(event)} />
        <Container styles={{ border: '1px solid black', padding: '1rem' }} />
        <div>
          <ThemeContextProvider>
            <User />
          </ThemeContextProvider>
        </div>
        <div>
          <UserContextProvider>
            <User1 />
          </UserContextProvider>
        </div>
        <Counter message="The count value is" />
        <Private isLoggedIn={true} component={Profile} />
        {/*   <List
          items={['Luke cage', 'Black Panther', 'Punisher']}
          onClick={(item) => console.log(item)}
        />
     <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
        <List
          items={[
            { id: 1, first: 'Lily', last: 'Flower' },
            { id: 2, first: 'Miles', last: 'Smith' },
            { id: 3, first: 'Mary', last: 'Mae' },
          ]}
          onClick={(item) => console.log(item)}
        />
        <RandomNumber value={10} isPositive />
        <Toast position="center" />
        <CustomButton variant="primary" onClick={() => console.log('Clicked')}>
          Primary Button
        </CustomButton>
      </div>
    </>
  );
}

export default App;
