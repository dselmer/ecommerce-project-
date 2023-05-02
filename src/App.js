import "./App.css";
import { addToCart } from "./redux/action"
import { useDispatch } from "react-redux";
import {Header} from "./components/Header"

function App() {
  const dispatch = useDispatch();
  const product = {
    name: "apple",
    type: "fruit",
    price: 1.0,
    color: "red",
  };
  return (
    <div className="App">
      <Header/>
      <button onClick={() => dispatch(addToCart(product))}>add to cart</button>
    </div>
  );
}

export default App;
