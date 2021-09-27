import { useReducer } from 'react';
type CounterState = {
  count: number
}

// this is either update or reset
type CounterAction = UpdateAction | ResetAction

// These are called discriminated unions below and is recommended for typing reducer function
// responsible for the increment and decrement 
type UpdateAction = {
  type: 'increment' | 'decrement' // strict types
  payload: number
}
// responsible for reset  
type ResetAction = {
  type: 'reset'
 }
const initialState = { count: 0 };

// reducer updates the state
function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload }
    case 'decrement':
      return { count: state.count - action.payload }
    case 'reset':
      return initialState
       default:
      return state
  }
}

const Counter = () => {
  const [state,dispatch] = useReducer(reducer, initialState)
  return (
    <>
       Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>
        Increment 10
      </button>
      <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>
        Decrement 10
      </button>
      <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
    </>
  );
};

export default Counter;