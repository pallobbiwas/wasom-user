import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./component/Header/Header";
import Users from "./component/Users/Users";


function App() {
  const [count, setCount] = useState(0);

  const SetCounter = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <div className="App container">
      <Header count={count}></Header>
      <Users SetCounter={SetCounter}></Users>
    </div>
  );
}

export default App;
