import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogForm from "./Components/BlogForm";
import CardList from "./Components/CardList";


import { getPost } from "./redux/asyncAction/thunkBlogs";





function App() {
  const dispatch = useDispatch();
  const blogsData = useSelector((state) => state.blogs);



  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]); 

  return (
    <>
      <div className="w-screen min-h-screen  flex-col bg-slate-800 p-[20px] gap-2 flex justify-items-center  items-center">
        <div className="max-w-[1440px] w-[100%] flex items-center justify-center">
        <BlogForm />
        </div>
        <CardList blogs={blogsData}/>
      </div>
    </>
  );
}

export default App;
