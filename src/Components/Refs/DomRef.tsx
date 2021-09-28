import{useRef, useEffect} from 'react';
  // for DOM references specify the DOM element type
const DomRef = () => {
  // ! call focus with out optional chaining
  const inputRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
   inputRef.current?.focus()
  }, [])

    return (
      <div>
        <input type='text' ref={inputRef} />
      </div>
    );
  };
  
export default DomRef;