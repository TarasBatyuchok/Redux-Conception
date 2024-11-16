import "./App.css";

import BlogForm from "./Components/BlogForm";
import CardList from "./Components/CardList";


const blogs = [
  {
    id: "1",
    title: "Basic Redux-Toolkit",
    body:
      "The Redux Toolkit package is intended to be the standard way to write Redux logic. It was originally created to help address three common concerns about Redux",
    response: {
      like: 0,
      unlike: 0,
    },
  },
  {
    id: "2",
    title: "React Redux",
    body:
      "React Redux is maintained by the Redux team, and kept up-to-date with the latest APIs from Redux and React.",
    response: {
      like: 0,
      unlike: 0,
    },
  },
];

function App() {
  return (
    <>
      <div className="w-screen h-screen flex-col bg-slate-800 p-[20px] gap-2 flex justify-items-center  items-center">
        <div className="max-w-[1440px] w-[100%] flex items-center justify-center">
        <BlogForm />
        </div>

        <CardList blogs={blogs}/>

      </div>
    </>
  );
}

export default App;
