// array of objects props
type PersonListProps = {
  names: {
    id: number
    first: string
    last: string
  }[]
}

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map(name => (
        <h2 key={name.id}>{name.first} {name.last}</h2>
      ))}
    </div>
  );
};

export default PersonList;