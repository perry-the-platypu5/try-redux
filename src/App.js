import logo from './logo.svg';
import './App.css';
import {useDispatch,useSelector} from 'react-redux'; 
import {increment,decrement, useCount, incrementByCount, decrementByCount} from './app/features/counter/counterSlice';
import Pokemon from './components/Pokemon';
import AllPokemon from './components/AllPokemon';

function App() {  
  const count = useSelector((state)=>state.counter.count);
  const dispatch = useDispatch();

  return (<>
    <div className="App">
      <h2>{count}</h2>
        <button onClick={()=>dispatch(increment())}>+1</button>
        <button onClick={()=>dispatch(decrement())}>-1</button>
        <button onClick={()=>dispatch(incrementByCount(2))}>+2</button>
        <button onClick={()=>dispatch(decrementByCount(2))}>-2</button>
    </div>
    <AllPokemon/>
    </>
  );
}

export default App;
