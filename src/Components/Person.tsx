// object props
type PersonProps = {// typing an obj prop
  name: {
    first: string
    last: string
}
}

const Person = (props: PersonProps) => {
  return (
    <div>
      <h1>{props.name.first} {props.name.last}</h1>
    </div>
  );
};

export default Person;

