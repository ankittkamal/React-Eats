import { logo } from "../assests";
import { Link } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
import { PiContactlessPaymentBold } from "react-icons/pi";
import { GoHome } from "react-icons/go";
import { CgPokemon } from "react-icons/cg";
import { BsCart } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import UserName from "../features/user/UserName";
import { setUserLoggedIn, updateName } from "../features/user/userSlice";

function Header() {
  const dispatch = useDispatch();

  const cartItems = useSelector((store) => store.cart.items);
  const username = useSelector((state) => state.user.username);
  //console.log(cartItems);

  // Access user login status from the Redux store

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <div className="flex justify-between  items-center shadow-lg   p-5 bg-blue-50 w-full ">
      <div>
        <Link to="/">
          <img
            className="w-48 p-2 transform transition-transform hover:scale-125 cursor-pointer "
            src={logo}
            alt="app logo"
          />
        </Link>
      </div>
      <div className="flex gap-4 items-center  ">
        <ul className=" flex items-center  gap-12 mx-12  ">
          <Link to="/">
            <li className="  flex items-center justify-between gap-1  rounded-xl p-2 hover:text-blue-500 cursor-pointer transform transition-transform hover:scale-110 font-medium ">
              <GoHome className="text-xl " />
              <p>Home</p>
            </li>
          </Link>
          <Link to="/about">
            <li className="hover:text-blue-500 flex items-center justify-between gap-2  rounded-xl p-2   cursor-pointer transform transition-transform hover:scale-110 font-medium  ">
              <CgPokemon className="text-xl" />
              <p>About us</p>
            </li>
          </Link>
          <Link to="/contact">
            <li className="  hover:text-blue-500 flex items-center justify-between gap-2 rounded-xl p-2  cursor-pointer transform transition-transform hover:scale-110 font-medium ">
              <PiContactlessPaymentBold className="text-xl" />
              <p>Contact</p>
            </li>
          </Link>
          <Link to="/signin">
            <button className="hover:text-blue-500 flex items-center justify-between gap-1 rounded-xl p-2 cursor-pointer transform transition-transform hover:scale-110 font-medium">
              <BsPerson className="text-2xl" />
              {isLoggedIn ? "Sign Out" : "Sign In"}
            </button>
          </Link>

          <Link to="/cart">
            <li className=" transform transition-transform hover:scale-110  hover:text-blue-500 flex items-center justify-between gap-4  rounded-xl p-2  cursor-pointer ">
              <span className="-mt-2 hover:text-blue-500">
                <BsCart className="text-3xl absolute font-medium  hover:text-blue-500 " />
                <p className="text-xs ml-3 font-bold mt-1.5  ">
                  {" "}
                  {cartItems.length}
                </p>
              </span>

              <p className=" font-medium ">Cart</p>
            </li>
          </Link>
          <li className="uppercase ">
            <UserName />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
