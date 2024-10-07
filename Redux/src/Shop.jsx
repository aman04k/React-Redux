import { useDispatch } from "react-redux";
import { depositMoney, withdrawMoney } from "./state/action-creators";

const Shop = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(withdrawMoney(100))}>-</button>
      Update Balance
      <button onClick={() => dispatch(depositMoney(100))}>+</button>
    </div>
  );
};

export default Shop;
