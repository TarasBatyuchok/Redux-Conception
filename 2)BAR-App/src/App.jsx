import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';








function App() {


  return (
    <>
      <div className="w-screen min-h-screen  flex-col bg-slate-800 p-[20px] gap-2 flex justify-items-center  items-center">
        <div className="max-w-[1440px] w-[100%] flex items-center justify-center">
        {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter> */}
        </div>
      </div>

    </>
  );
}

export default App;
