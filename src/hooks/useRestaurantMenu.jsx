import { useEffect, useState } from "react";
import { SWIGGY_RESTAURSNT_MENU } from "../utils/Constants";

function useRestaurantMenu(resId) {
  const [resIdInfo, setResIdInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(SWIGGY_RESTAURSNT_MENU + resId);
    const json = await data.json();
    // console.log(json);
    setResIdInfo(json?.data);
  };
  return resIdInfo;
}

export default useRestaurantMenu;
