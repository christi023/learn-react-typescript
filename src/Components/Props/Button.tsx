import React from 'react';

// events and button with id parameter
type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void; // do not return anything
};

const Button = (props: ButtonProps) => {
  return <button onClick={(event) => props.handleClick(event, 1)}>Click</button>;
};

export default Button;
