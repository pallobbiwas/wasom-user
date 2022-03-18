import { useState } from 'react';
import './App.css';
import Header from './component/Header/Header';
import Users from './component/Users/Users';

function App() {
  const [count, setCount] = useState(0);

  const SetCounter = () =>{
    setCount(count+1);
  }
  return (
    <div className="App container">
      <Header count = {count}></Header>
      <Users SetCounter={SetCounter}></Users>
    </div>
  );
}

export default App;
