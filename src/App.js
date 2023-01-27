// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment } from './redux/counter';

const App = () => {

  const {count} = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h2>The Count is</h2>
      <p>{count}</p>
      <button onClick={()=> dispatch(increment())}>Increment</button>
      <button onClick={()=> dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
