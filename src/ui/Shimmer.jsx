import { AiFillStar, AiOutlineDown } from "react-icons/ai";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import { IoTimerSharp } from "react-icons/io5";
import { RxDividerHorizontal } from "react-icons/rx";
import { DividerFor } from "../features/menu/RestaurantMenu";

const CardShimmer = () => {
  return (
    <div className="basis-[250px]  p-2.5 mb-2.5 shadow animate-pulse ">
      <div className="h-[154px] w-[250px] bg-bio rounded-lg "></div>
      <div className="w-3/5 mt-2.5 h-[15px]  bg-bio  "></div>
      <div className="w-4/5 mt-1 h-[15px]  bg-bio"></div>
      <div className="w-full mt-[18px] h-[15px]  bg-bio"></div>
    </div>
  );
};

export const MenuShimmer = () => {
  return (
    <>
      <div className="w-2/4 shadow animate-pulse">
        <div className=" flex justify-between  mt-12 m-0 bg-bio">
          <div className="flex flex-col">
            <h2 className="font-bold text-xl ml-2 bg-bio"> </h2>

            <p className="text-sm  font-light ml-2 bg-bio"> </p>
            <p className="text-sm  font-light ml-2 bg-bio"> </p>
          </div>

          <div className="flex flex-col border border-black rounded-lg m-1 p-1 bg-bio">
            <p className="flex items-center text-green-600 ml-3 bg-bio">
              {" "}
              <AiFillStar />
            </p>
            <p className="flex">
              <RxDividerHorizontal />
              <RxDividerHorizontal />
              <RxDividerHorizontal />
              <RxDividerHorizontal />
            </p>
            <p className="text-xs bg-bio  font-light"></p>
          </div>
        </div>
        <div>
          <div className="flex bg-bio w-2/4 ">
            <div className="">
              <DividerFor />
            </div>
          </div>
          <div className="flex w-2/4 mt-2 m-2 gap-5 bg-bio">
            <p className="flex items-center font-semibold gap-1 bg-bio">
              <IoTimerSharp className="text-xl" />
            </p>
            <span className="flex items-center gap-2 bg-bio ">
              <HiOutlineCurrencyRupee className="text-2xl" />
              <p className="font-semibold bg-bio">{}</p>
            </span>
          </div>
        </div>
      </div>
      {/** Restaurant Categories Accordian */}
      <div className="w-2/4 mt-4 bg-bio shadow animate-pulse">
        <div className="  ">
          {/**header */}
          <div className="w-3/5  h-[15px]  p-2 mt-4 my-2 rounded-md cursor-pointer bg-bio">
            <h3 className="w-4/5  h-[15px] text-lg font-bold text-stone-700 ">
              {" "}
            </h3>
            <AiOutlineDown />
          </div>
          {/**Accordion Body */}
          <div className="ml-2 bg-bio">
            <div className="border-gray-200 border-b-2 flex justify-between">
              <div className="flex flex-col w-9/12">
                <span className="mt-4"></span>
                <span className="text-base font-semibold "></span>
                <span className="text-sm font-medium ">₹</span>
                <span className="text-xs mt-2 font-extralight"></span>
              </div>
              <div className="  w-3/12 ">
                <button className=" absolute opacity-95 border border-gray-400 w-24 bg-white text-green-600 p-1 rounded-md mx-12 mt-24">
                  ADD
                </button>
                <img
                  alt=""
                  className="w-36 mt-6  rounded-md mb-12 h-auto ml-6 "
                />
              </div>
            </div>
            <div className="h4  border-b-8 divide-solid outline-none mb-6 mt-8"></div>
            <div className="border-gray-200 border-b-2 flex justify-between">
              <div className="flex flex-col w-9/12">
                <span className="mt-4"></span>
                <span className="text-base font-semibold bg-bio "></span>
                <span className="text-sm font-medium bg-bio ">₹</span>
                <span className="text-xs mt-2 font-extralight bg-bio"></span>
              </div>
              <div className="  w-3/12 ">
                <button className=" absolute opacity-95 border border-gray-400 w-24 text-green-600 p-1 rounded-md mx-12 mt-24 bg-white">
                  ADD
                </button>
                <img
                  alt=""
                  className="w-36 mt-6  rounded-md mb-12 h-auto ml-6 bg-bio"
                />
              </div>
            </div>
            <div className="h4  border-b-8 divide-solid outline-none mb-6 mt-8 "></div>
            <div className="border-gray-200 border-b-2 flex justify-between">
              <div className="flex flex-col w-9/12">
                <span className="mt-4"></span>
                <span className="text-base font-semibold bg-bio "></span>
                <span className="text-sm font-medium bg-bio ">₹</span>
                <span className="text-xs mt-2 font-extralight bg-bio"></span>
              </div>
              <div className="  w-3/12 ">
                <button className=" absolute opacity-95 border border-gray-400 w-24 text-green-600 p-1 rounded-md mx-12 mt-24 bg-white">
                  ADD
                </button>
                <img
                  alt=""
                  className="w-36 mt-6  rounded-md mb-12 h-auto ml-6 bg-bio"
                />
              </div>
            </div>
            <div className="h4  border-b-8 divide-solid outline-none mb-6 mt-8 "></div>
          </div>
        </div>
      </div>
    </>
  );
};

const SHIMMER_RES_CARDS_COUNT = 8;
const Shimmer = () => {
  return (
    <div className="grid grid-cols-4 gap-2 p-4 w-5/6 mt-16 ">
      {Array.from({ length: SHIMMER_RES_CARDS_COUNT }).map((element, index) => {
        return <CardShimmer key={index} />;
      })}
    </div>
  );
};

export default Shimmer;
