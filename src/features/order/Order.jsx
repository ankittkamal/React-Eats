// Test ID: IIDSAT

import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { Link, useNavigation } from "react-router-dom";
import EmptyCart from "../cart/EmptyCart";
import { fetchAddress } from "../user/userSlice";
import { clearCart } from "../cart/cartSlice";
import CartItem from "../cart/CartItem";

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

function Order() {
  const {
    username,
    status: addressStatus,
    position,
    address,
    error: errorAddress,
  } = useSelector((state) => state.user);
  const isLoadingAddress = addressStatus === "loading";
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const cartItems = useSelector((state) => state.cart.items);

  if (!cartItems.length) return <EmptyCart />;

  const dataArray = cartItems;
  // console.log(dataArray);

  let totalPrice = 0;

  // Loop through the array and sum up the prices
  for (const item of dataArray) {
    let itemPrice = item?.card?.info.price
      ? Math.round(item?.card?.info?.price / 100)
      : Math.round(item?.card?.info?.defaultPrice / 100);
    totalPrice += itemPrice;
  }

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="flex flex-col ">
      {/** details to order  */}
      <div className="px-4 py-6 border border-blue-400 mt-4">
        <h2 className="mb-8 text-xl font-semibold">
          {` Ready to order? Let's go! `}
        </h2>

        <form>
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="sm:basis-40"> Name : </label>

            <input
              className="input grow"
              type="text"
              name="customer"
              defaultValue={username}
              required
            />
          </div>

          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="sm:basis-40">Phone number : </label>
            <div className="grow">
              <input
                className="input w-full"
                type="tel"
                name="phone"
                required
              />
            </div>
          </div>

          <div className="relative mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="sm:basis-40">Address</label>
            <div className="grow">
              <input
                className="input w-full"
                type="text"
                name="address"
                disabled={isLoadingAddress}
                defaultValue={address}
                required
              />
              {addressStatus === "error" && (
                <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                  {errorAddress}
                </p>
              )}
            </div>

            {!position.latitude && !position.longitude && (
              <span className="absolute  z-50 right-[5px] top-[5px]">
                <Button
                  disabled={isLoadingAddress}
                  type="small"
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(fetchAddress());
                  }}
                >
                  Get position
                </Button>
              </span>
            )}
          </div>
          <div>
            <input
              type="hidden"
              name="cart"
              value={JSON.stringify(cartItems)}
            />
            <Link to="/order">
              <Button type="primary" onClick={() => handleClearCart()}>
                Order now
              </Button>
            </Link>
          </div>
        </form>
      </div>

      {/** order status */}
      <div className="space-y-8 px-4 py-6 border mt-2 border-blue-400">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-xl font-semibold">Order #{1} status</h2>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-6 py-5">
          <p className="font-medium">Order should arrive in : 35 min</p>
          <p className="text-xs text-stone-500">(Estimated delivery: 40 min)</p>
        </div>
        {/* <ul className="dive-stone-200 divide-y border-b border-t">
          {cartItems.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </ul> */}
        <div className="space-y-2 bg-stone-200 px-6 py-5">
          <p className="text-sm font-medium text-stone-600">
            Price : ₹ {totalPrice}
          </p>
          <p className="text-sm font-medium text-stone-600">tax : ₹ {99}</p>

          <p className="font-bold">To pay on delivery: {totalPrice + 99}</p>
        </div>
      </div>
    </div>
  );
}

export default Order;
