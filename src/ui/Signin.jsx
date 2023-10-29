import { useDispatch, useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";
import { setUserLoggedIn, updateName } from "../features/user/userSlice";

function Signin() {
  const username = useSelector((state) => state.user.username);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const dispatch = useDispatch();

  const signOut = () => {
    // Dispatch an action to set isLoggedIn to false
    if (isLoggedIn) {
      dispatch(setUserLoggedIn(false));
      dispatch(updateName(""));
    }
  };

  const handleUsernameSubmit = () => {
    if (username) {
      dispatch(updateName(username));
      dispatch(setUserLoggedIn(true));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mb-48">
      <span className="mb-12 text-4xl  border border-blue-500  flex gap-1 ">
        <p className="text-blue-500 p-2 ">ReactEats</p>{" "}
        <p className="text-white bg-blue-500  p-2">
          {"  "}
          Where Flavor Meets Technology
        </p>
      </span>
      {isLoggedIn ? (
        <div onClick={signOut}>
          <Button to="/" type="primary">
            {/* You can remove the inner <p> tag, as it's not necessary */}
            Sign Out, {username}
          </Button>
        </div>
      ) : (
        <div>
          <CreateUser onUsernameSubmit={handleUsernameSubmit} />
        </div>
      )}
    </div>
  );
}

export default Signin;
