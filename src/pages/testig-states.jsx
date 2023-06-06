import React, { useContext } from 'react';
import { GlobalContext } from '../store/globalContext';
import { decrement, fetchBooks, increment } from '../store/apiCalls';

const MyStates = () => {
  const { state, dispatch } = useContext(GlobalContext);

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {state.count}</p>
      <p>Count: {JSON.stringify(state.books)}</p>
      <button onClick={() => increment(dispatch)}>Increment</button>
      <br />
      <button onClick={() => decrement(dispatch)}>Decrement</button>
      <br />
      <button onClick={() => fetchBooks(dispatch)}>Get books</button>
    </div>
  );
};

export default MyStates;
