import "./App.css";
import { userSlice } from "./store/reducers/UserSlice";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { useEffect } from "react";
import { fetchUsers } from "./store/reducers/ActionCreator";
import PostContainer from "./components/PostContainer";
import PostContainerSecond from "./components/PostContainerSecond";

function App() {
  const { count,users ,isLoading ,error } = useAppSelector((state) => state.userReducer);
  const { increment, decrement } = userSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <>
      <section className="p-[10px]">
        <h1 className="text-2xl text-black-200">{count}</h1>
        <div className="flex gap-2">
          <button
            className="mt-3 p-[8px] bg-gray-400 text-white"
            onClick={() => dispatch(increment(1))}
          >
            Increment
          </button>
          <button
            className="mt-3 p-[8px] bg-gray-400 text-white"
            onClick={() => dispatch(decrement(1))}
          >
            Decrement
          </button>
        </div>
        <div className="flex gap-4">
          {/* {isLoading && <h1>Loading...</h1>}
          {error && <h1>{error}</h1> }
          {JSON.stringify(users, null, 2)} */}

         <PostContainer/>
         <PostContainerSecond/>
        </div>
      </section>
    </>
  );
}

export default App;
