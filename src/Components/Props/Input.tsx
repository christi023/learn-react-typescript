import React from "react";

// input elements ===> input value and onChange handler
type InputProps = {
  value: string
  // can also be passed as a prop
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
// destructure the props here
const Input = ({value, handleChange}: InputProps) => {
   
 /* const handleInputChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
    console.log(event);
  }*/

  return (
    <input type="text" value={value} onChange={handleChange}/>
  );
};

export default Input;