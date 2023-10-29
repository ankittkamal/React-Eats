import { Link } from "react-router-dom";
import { EmptyCartImg } from "../../assests";

function EmptyCart() {
  return (
    <div className="flex flex-col items-center">
      <img className="w-96 h-72 " src={EmptyCartImg} alt="cart" />
      <h3 className="font-semibold text-gray-700 mt-4 text-xl">
        Your cart is empty
      </h3>
      <p className="mt-2 font-thin text-sm">
        You can go to home page to view more restaurants
      </p>
      <Link to="/">
        <button className="bg-orange-500 text-white mt-6 p-3">
          SEE RESTAURANTS NEAR YOU
        </button>
      </Link>
    </div>
  );
}

export default EmptyCart;
