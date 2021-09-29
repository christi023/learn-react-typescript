// type props
type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

// accepts array of items and handle a click event on each of these items
// T means we can pass in an array of any type without error
// eg here <T extends string | number> generics very helpful
const List = <T extends { id: number }>({ items, onClick }: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item) => {
        return (
          <div key={item.id} onClick={() => onClick(item)}>
            {item.id}
          </div>
        );
      })}
    </div>
  );
};

export default List;
