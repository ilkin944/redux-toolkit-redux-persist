import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../store/reducers/counterReducer';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
    </div>
  );
};

export default Counter;
