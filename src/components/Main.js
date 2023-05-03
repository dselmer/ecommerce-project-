import "../App.css";
import { addToCart } from "../redux/action"
import { useDispatch } from "react-redux";


export function Main() {
  const dispatch = useDispatch();
  const product = {
    name: "apple",
    type: "fruit",
    price: 1.0,
    color: "red",
  };
  return (
    <div>
   
      <button onClick={() => dispatch(addToCart(product))}>add to cart</button>
    </div>
  );
}

 