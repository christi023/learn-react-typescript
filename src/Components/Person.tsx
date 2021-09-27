import { PersonProps } from "./Props/Person.types";

const Person = (props: PersonProps) => {
  return (
    <div>
      <h1>{props.name.first} {props.name.last}</h1>
    </div>
  );
};

export default Person;

