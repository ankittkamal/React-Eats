import { useDispatch } from "react-redux";
import { addItem, deleteItem } from "./cartSlice";
import { GoDotFill } from "react-icons/go";
import { BsTriangleFill } from "react-icons/bs";
import { CDN_URL } from "../../utils/Constants";

function CartItem({ items }) {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  };

  const handleDeleteItem = (item) => {
    dispatch(deleteItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="border-gray-200 border-b-2 flex justify-between"
        >
          <div className="flex flex-col w-9/12">
            <span className="mt-4">
              <IsVeg item={item} />
            </span>
            <span className="text-base font-semibold ">
              {item?.card?.info?.name}
            </span>
            <span className="text-sm font-medium ">
              ₹
              {item.card.info.price
                ? Math.round(item.card.info.price / 100)
                : Math.round(item.card.info.defaultPrice / 100)}
            </span>
          </div>
          <div className="  w-5/12 ">
            <button
              className=" absolute opacity-95 border border-gray-400 w-12 bg-white
               text-green-600  rounded-md mx-6 mt-24"
              onClick={() => {
                handleAddItem(item);
              }}
            >
              +
            </button>
            <button
              className=" absolute opacity-95 border border-gray-400 w-12 bg-white text-red-600  rounded-md mx-28 mt-24"
              onClick={() => {
                handleDeleteItem(item);
              }}
            >
              -
            </button>
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              alt="menuImage"
              className="w-36 mt-6  rounded-md mb-12 h-auto ml-6 "
            />
          </div>
        </div>
      ))}
    </div>
  );
}

const IsVeg = ({ item }) => {
  const isVeg = item?.card?.info?.itemAttribute?.vegClassifier === "VEG";

  return (
    <span>
      {isVeg ? (
        <span className=" border border-green-600 font-semibold  h-4   text-xs inline-block cursor-pointer">
          <p className="w-4  -mt-2 align-middle inline-block  " title="VEG">
            <GoDotFill className="text-base text-green-600 p-0.5 mt-0.5 " />
          </p>
        </span>
      ) : (
        <span className=" border border-red-600 font-semibold  h-4    text-xs inline-block cursor-pointer">
          <p
            className="w-4    text-xs -mt-2  align-middle   inline-block "
            title="NONVEG"
          >
            <BsTriangleFill className="text-base text-red-600 p-0.5 mt-0.5 " />
          </p>
        </span>
      )}
    </span>
  );
};

export default CartItem;
