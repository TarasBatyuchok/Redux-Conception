import "./App.css";

import BlogForm from "./Components/BlogForm";

function App() {
  return (
    <>
      <div className="w-screen h-screen flex-col bg-slate-800 p-[20px] gap-2 flex justify-items-center  items-center">
        <div className="max-w-[1440px] w-[100%] flex items-center justify-center">
        <BlogForm />
        </div>

      </div>
    </>
  );
}

export default App;
