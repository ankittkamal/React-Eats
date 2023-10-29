import { useState } from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { setUserLoggedIn, updateName } from "./userSlice";
import { useNavigate } from "react-router-dom";

function CreateUser({ onUsernameSubmit }) {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    dispatch(updateName(username));
    dispatch(setUserLoggedIn(true));
    navigate("/");
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="">
        <p className="mb-4 text-sm text-stone-600 md:text-lg">
          👋 Welcome! Please start by telling us your name:
        </p>

        <input
          type="text"
          placeholder="Your full name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input mb-6 w-72"
        />

        {username !== "" && (
          <div>
            <Button type="primary">Start ordering</Button>
          </div>
        )}
      </form>
    </>
  );
}

export default CreateUser;
