import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function Error() {
  const error = useRouteError();
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center text-3xl rounded-md text-red-700 m-4 p-3">
        Oops!! Something went wrong 😢
      </h1>

      <p className="text-center text-2xl  bg-red-600 rounded-md text-black m-4 p-3">
        {error.data} || {error.message}
      </p>
      <p className="text-center text-2xl  bg-red-600 rounded-md text-black m-4 p-3">
        {error.status}: {error.statusText}
      </p>
      <LinkButton to={-1}>&larr; Go back! </LinkButton>
    </div>
  );
}

export default Error;
