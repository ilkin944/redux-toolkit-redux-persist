import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../store/reducers/authReducer';

const Auth = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth);

  
  return (
    <div>
      <h2>{isAuthenticated ? 'Logged In' : 'Logged Out'}</h2>
      {isAuthenticated ? (
        <button onClick={() => dispatch(logout())}>Logout</button>
      ) : (
        <button onClick={() => dispatch(login())}>Login</button>
      )}
    </div>
  );
};

export default Auth;
