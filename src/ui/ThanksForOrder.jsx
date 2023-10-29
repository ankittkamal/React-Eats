import { Link } from "react-router-dom";

function ThanksForOrder() {
  return (
    <div className="flex flex-col items-center align-middle justify-center">
      <div className="bg-green-100 p-4 rounded-lg shadow-md">
        <p className="text-2xl font-semibold text-green-600">
          Thank you for your order!
        </p>
        <p className="text-lg text-green-800">
          Your order has been successfully placed.
        </p>
        <p className="text-lg text-green-800">
          {` We will notify you once it's on its way.`}
        </p>
      </div>
      <Link to="/">
        <div className="flex flex-col items-center align-middle justify-center mt-6 mb-44">
          <h2 className="mt-2 font-medium text-sm">
            You can go to home page to view more restaurants
          </h2>
          <button className="bg-blue-500 text-white mt-6 p-3">
            SEE RESTAURANTS NEAR YOU
          </button>
        </div>
      </Link>
    </div>
  );
}

export default ThanksForOrder;
