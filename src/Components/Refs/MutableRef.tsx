import {useState,useRef,useEffect} from 'react';
// timer component
const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const interValRef = useRef<number | null>(null); // reference created
// for mutable references specify the appropriate type eg number
  const stopTimer = () => {
    if(interValRef.current) // if true only pass
    window.clearInterval(interValRef.current)
  }
// mutating the reference value 
  useEffect(() => {
    interValRef.current = window.setInterval(() => {
     setTimer((timer) => timer + 1)
    }, 1000)
    return () => {
      stopTimer()
    }
  }, [])

  return (
    <div>
      HookTimer - {timer} -
       <button onClick={() => stopTimer()}>Stop Timer</button>
    </div>
  );
};

export default MutableRef;