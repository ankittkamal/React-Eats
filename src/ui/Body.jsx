import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_RESTAURSNT } from "../utils/Constants";
import { Link } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineDown } from "react-icons/ai";
import { extractPriceFromString } from "../utils/helper";
import RestaurantCard from "../features/menu/RestaurantCard";

function Body() {
  const [searchText, setSearchText] = useState("");
  const [listOfResturant, setListOfResturant] = useState([]);
  const [sortedRestaurants, setSortedRestaurants] = useState([]); // To store the sorted list
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  //mock data = resList

  // fetching Swiggy restaurant data
  const fetchData = async () => {
    const data = await fetch(SWIGGY_RESTAURSNT);
    const json = await data.json();
    // console.log(json);
    // console.log(restaurantData);

    // destructuring object to get restaurantData
    const restaurantData =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListOfResturant(restaurantData);
    setSortedRestaurants(restaurantData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Handle search
  const handleSearch = () => {
    const filteredRestaurant = listOfResturant?.filter((res) =>
      res.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setSortedRestaurants(filteredRestaurant);
  };
  //view top restaurant
  // const viewTopRestaurants = () => {
  //   const filteredList = listOfResturant.filter(
  //     (res) => res.info.avgRating > 4.2
  //   );
  //   setSortedRestaurants(filteredList);
  // };

  // soring restaurants based on rating and cost
  const sortRestaurants = (option) => {
    let sortedList = [...listOfResturant]; // Create a copy of the filtered list
    if (option === "rating") {
      sortedList.sort((a, b) => b?.info?.avgRating - a?.info?.avgRating);
    } else if (option === "costLow") {
      sortedList.sort(
        (a, b) =>
          extractPriceFromString(a.info?.costForTwo) -
          extractPriceFromString(b.info?.costForTwo)
      );
    } else if (option === "costHigh") {
      sortedList.sort(
        (a, b) =>
          extractPriceFromString(b.info?.costForTwo) -
          extractPriceFromString(a.info?.costForTwo)
      );
    } else if (option === "deliveryTime") {
      sortedList.sort(
        (a, b) => a.info?.sla?.deliveryTime - b.info?.sla?.deliveryTime
      );
    }
    setSortedRestaurants(sortedList);
  };
  // drop down toggle
  const toggleSortDropdown = () => {
    setShowSortDropdown(!showSortDropdown);
  };

  // Sort the restaurants based on the selected option and Close the dropdown
  const handleSortSelection = (option) => {
    sortRestaurants(option); // Sort the restaurants based on the selected option
    setShowSortDropdown(false); // Close the dropdown
  };

  return listOfResturant.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex justify-between gap-40  w-full  ">
        {/**  Title */}
        <h2 className=" flex justify-start h-[100px]  items-center font-extrabold text-xl ml-8 ">
          Restaurants with online food delivery in Delhi
        </h2>

        {/** Restaurant  Search Container */}
        <div className="flex  min-w-[300px]  h-[100px]  items-center  gap-2">
          <input
            type="text"
            placeholder=" Search for restaurant"
            value={searchText}
            className="outline-none text-base  p-[5px]  h-[30px] rounded-md ring-1 ring-blue-400 bg-gray-100"
            key="input-text"
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
          <button
            className="  bg-blue-500  transform transition-transform hover:scale-110 text-white rounded-xl p-1 w-24 flex items-center justify-between "
            // onClick={searchData(searchText, allRestaurants)}
            onClick={handleSearch}
          >
            <BiSearchAlt2 className="ml-2" />
            <p className="mx-1">Search</p>
          </button>
        </div>

        {/** Sorting */}
        <div className="flex h-[100px] items-center justify-end ml-16 ">
          {/**Sort by button */}
          <button
            className="rounded-md ring-1 mr-32 ring-blue-600 transform transition-transform hover:scale-110 px-[5px] p-1 hover:text-blue-600"
            onClick={toggleSortDropdown}
          >
            <p className="flex items-center">
              {" "}
              Sort by
              <AiOutlineDown className="mt-1 mx-1 text-blue-400" />
            </p>
          </button>

          {/* Sorting dropdown */}
          {showSortDropdown && (
            <div className="absolute mt-52  bg-blue-50 flex flex-col  border border-gray-300 p-1 rounded-2xl ">
              <button
                className="py-2 hover:bg-white rounded-md"
                onClick={() => handleSortSelection("deliveryTime")}
              >
                Delivery Time
              </button>
              <button
                className="py-2 hover:bg-white rounded-md"
                onClick={() => handleSortSelection("rating")}
              >
                Rating
              </button>
              <button
                className="py-2 hover:bg-white rounded-md"
                onClick={() => handleSortSelection("costLow")}
              >
                Cost: Low to High
              </button>
              <button
                className="py-2 hover:bg-white rounded-md"
                onClick={() => handleSortSelection("costHigh")}
              >
                Cost: High to Low
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 p-4 w-5/6 mb-4  ">
        {sortedRestaurants.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </>
  );
}

export default Body;
