import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BsCart } from "react-icons/bs";
import { clearCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";
import Order from "../order/Order";

function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  //console.log(cartItems);

  if (!cartItems.length) return <EmptyCart />;

  return (
    <div className="w-full flex justify-between ">
      {/** clear cart button  */}
      <div className="w-2/12  ring-2 ring-gray-500   hover:ring-red-500  p-2 mt-8 hover:text-red-500 rounded-xl mx-8 h-10">
        <button
          className="flex items-center gap-2 transform transition-transform hover:scale-105 -mx-0.5"
          onClick={() => handleClearCart()}
        >
          <div className="text-lg font-semibold  flex items-center mx-8">
            Clear
            <li className="   hover:text-red-500 flex items-center justify-between gap-3 p-0 cursor-pointer ">
              <span className="-mt-2 hover:text-red-500">
                <BsCart className="text-3xl absolute font-semibold  hover:text-red-500 " />
                <p className="text-xs ml-3 font-bold mt-1.5  ">
                  {" "}
                  {cartItems.length}
                </p>
              </span>
              <p className=" font-semibold ">Cart</p>
            </li>
          </div>
        </button>
      </div>
      {/** order info  */}
      <div className="mt-3 w-6/12">
        <Order />
      </div>

      {/** order list  */}
      <div className="mb-24 mt-12 w-4/12 mx-28">
        <div className=" ">
          <CartItem items={cartItems} />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Cart;
