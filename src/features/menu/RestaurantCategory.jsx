import { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import ItemList from "./ItemList";
import { AiOutlineUp } from "react-icons/ai";

function RestaurantCategory({ data }) {
  // console.log(data);

  const [showItems, setShowItems] = useState(true);

  const handleAccordion = () => {
    //console.log("clicked");
    setShowItems(!showItems);
    //setShowIndex();
  };

  return (
    <div className="  ">
      {/**header */}
      <div
        className=" flex items-center justify-between p-2 mt-4 my-2 rounded-md cursor-pointer"
        onClick={handleAccordion}
      >
        <h3 className="text-lg font-bold text-stone-700">
          {data.title} ({data?.itemCards?.length})
        </h3>
        {showItems ? <AiOutlineDown /> : <AiOutlineUp />}
      </div>
      {/**Accordion Body */}
      <div className="ml-2">
        {showItems && <ItemList items={data.itemCards} />}
        <div className="h4  border-b-8 divide-solid outline-none mb-6 mt-8"></div>
      </div>
    </div>
  );
}

export default RestaurantCategory;
