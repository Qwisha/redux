import logo from './logo.svg';
import './App.css';
import { increment, decrement } from './action';
import { useDispatch, useSelector } from 'react-redux';
function App() {
  const dispatch = useDispatch();
  const val = useSelector((state => state.upDown));
  return (
    <div className="App">
      <h1>{val}</h1>
      <input type="button" value="+" onClick={() => {dispatch(increment())}} />
      <input type="button" value="-" onClick={() => {dispatch(decrement())}} />
    </div>
  );
}

export default App;
