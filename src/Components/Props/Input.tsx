import React from "react";

// input elements ===> input value and onChange handler
type InputProps = {
  value: string
  // can also be passed as a prop
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
const Input = (props: InputProps) => {
   
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
    console.log(event);
  }

  return (
    <input type="text" value={props.value} onChange={handleInputChange}/>
  );
};

export default Input;