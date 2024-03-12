import { useState } from "react";
import { useGetGoodsQuery } from "./redux/goodsApi";

import "./App.css";

function App() {
  const [count, setCount] = useState("");
  const [newProduct, setNewProduct] = useState("");

  const { data = [], isLoading } = useGetGoodsQuery(count,
    {pollingInterval: 60000}
    );
  console.log(data)

  const handleAddProduct = async () => {
    if (newProduct) {
      await addProduct({ name: newProduct }).unwrap();
      setNewProduct("");
    }
  };

  function toggleTheme() {
    document.documentElement.classList.toggle("dark");
  }

  if (isLoading) return <h1>Loading...</h1>;

  const limitDataFetch = (e) => {
    setCount(e.currentTarget.innerHTML);
  };

  return (
    <>
      <div className="w-screen h-screen  flex-col dark:bg-slate-400 p-[20px] gap-2">
        <div className="flex flex-row justify-between items-center">
        <div>
          <h3>Limit</h3>
          <span className="flex gap-2">
            <button
              onClick={limitDataFetch}
              className="p-2 border border-slate-300 rounded hover:bg-red-500 hover:text-white"
            >
              1
            </button>
            <button
              onClick={limitDataFetch}
              className="p-2 border border-slate-300 rounded hover:bg-red-500 hover:text-white"
            >
              2
            </button>
            <button
              onClick={limitDataFetch}
              className="p-2 border border-slate-300 rounded hover:bg-red-500 hover:text-white"
            >
              3
            </button>
            <button
              onClick={limitDataFetch}
              className="p-2 border border-slate-300 rounded hover:bg-red-500 hover:text-white"
            >
              4
            </button>
            <button
              onClick={limitDataFetch}
              className="p-2 border border-slate-300 rounded hover:bg-red-500 hover:text-white"
            >
              All
            </button>
          </span>
        </div>
        <button
          onClick={toggleTheme}
          className="max-w-[200px] bg-slate-400 dark:bg-white text-white px-5 py-3 rounded  hover:bg-slate-400 hover:text-black"
        >
          Mode
        </button>

        <div className="flex gap-2">
          <input
            type="text"
            value={newProduct}
            onChange={(e) => setNewProduct(e.target.value)}
            className="bg-slate-400 p-2 dark:bg-white-400"
          />
          <button onClick={handleAddProduct} className="p-2 border border-slate-300">Add product</button>
        </div>
        
        </div>



        <ul className="flex gap-1 flex-col mt-1 max-w-[500px]">
          {data.map((item) => (
            <li key={item.id} className="p-2 border border-slate-300 rounded">
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
