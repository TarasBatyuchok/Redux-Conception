import Like from "./Like";
import Spinner from "./Spinner";
import UserMark from "./User";
import { useDispatch } from "react-redux";
import { AiFillDelete } from "react-icons/ai";

import { deletePost } from "../redux/asyncAction/thunkBlogs";

function CardList({ blogs }) {
  const dispatch = useDispatch();
  if (!blogs.length) {
    return <Spinner />;
  }

  const handleDelete = (id) => {
    console.log("Deleting post ID:", typeof(id));
    dispatch(deletePost(id));
  };
  

  return (
    <div className="space-y-6">
      {blogs.map((blog) => (
        <div key={blog.id} className="bg-white rounded-lg shadow-md p-6  ">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800">
              {blog.title}
            </h3>
            <p className="text-gray-600 mt-2">
              {blog.body?.substring(0, 100) || "Текст відсутній"}
            </p>
          </div>
          <p className="text-gray-500 text-sm mb-4">
            <UserMark name={blog.name} />
          </p>
          <div className="flex items-center justify-between">
            <Like />
          
            <button
              className="text-red-500 hover:text-red-700 font-semibold"
              onClick={() => handleDelete(blog.id)}
            >
              <AiFillDelete size={30} />
              
            </button>

           
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardList;
