import { useParams } from "react-router-dom";
import { RxDividerHorizontal } from "react-icons/rx";
import { AiFillStar } from "react-icons/ai";
import { IoTimerSharp } from "react-icons/io5";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import RestaurantCategory from "./RestaurantCategory";
import useRestaurantMenu from "../../hooks/useRestaurantMenu";
import { MenuShimmer } from "../../ui/Shimmer";

function RestaurantMenu() {
  const { resId } = useParams(); /* Read dynamic URL params */

  const resIdInfo =
    useRestaurantMenu(
      resId
    ); /* Passing resId to Custom Hooks to fetch restaurant details and returns it */

  if (resIdInfo === null) return <MenuShimmer />;

  const {
    name,
    avgRating,
    totalRatingsString,
    cuisines,
    areaName,
    sla,
    costForTwoMessage,
  } = resIdInfo?.cards[0]?.card?.card?.info;

  // const { itemCards } =
  //   resIdInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
  //     ?.card;

  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const cardCategories =
    resIdInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(cardCategories);

  return (
    <>
      <div className="w-2/4">
        <div className=" flex justify-between  mt-12 m-0">
          <div className="flex flex-col">
            <h2 className="font-bold text-xl ml-2">{name}</h2>

            <p className="text-sm  font-light ml-2"> {cuisines.join(", ")}</p>
            <p className="text-sm  font-light ml-2">{areaName} </p>
          </div>

          <div className="flex flex-col border border-black rounded-lg m-1 p-1">
            <p className="flex items-center text-green-600 ml-3">
              {" "}
              <AiFillStar />
              {avgRating}
            </p>
            <p className="flex">
              <RxDividerHorizontal />
              <RxDividerHorizontal />
              <RxDividerHorizontal />
              <RxDividerHorizontal />
            </p>
            <p className="text-xs  font-light">{totalRatingsString}</p>
          </div>
        </div>
        <div>
          <div className="flex w-2/4 ">
            <div className="">
              <DividerFor />
            </div>
          </div>
          <div className="flex w-2/4 mt-2 m-2 gap-5">
            <p className="flex items-center font-semibold gap-1">
              <IoTimerSharp className="text-xl" />
              {sla?.slaString}
            </p>
            <span className="flex items-center gap-2 ">
              <HiOutlineCurrencyRupee className="text-2xl" />
              <p className="font-semibold">{costForTwoMessage}</p>
            </span>
          </div>
        </div>
      </div>
      {/** Restaurant Categories Accordian */}
      <div className="w-2/4 mt-4">
        {cardCategories.map((category) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
          />
        ))}
      </div>
    </>
  );
}

export const DividerFor = () => {
  // Create an array to hold the components
  const dividers = [];

  // Use a loop to push 20 instances of the component into the array
  for (let i = 0; i < 45; i++) {
    dividers.push(<RxDividerHorizontal key={i} />);
  }

  return <span className="flex">{dividers}</span>;
};

export default RestaurantMenu;
