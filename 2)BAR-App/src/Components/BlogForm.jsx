import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../redux/asyncAction/thunkBlogs";

const BlogForm = () => {
  const dispatch = useDispatch();

  const userRef = useRef();
  const titleRef = useRef();
  const bodyRef = useRef();

  
  const [isFormValid, setIsFormValid] = useState(false);

  
  const checkFormValidity = () => {
    const userName = userRef.current.value;
    const title = titleRef.current.value;
    const body = bodyRef.current.value;
    
    
    setIsFormValid(userName && title && body);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    
    
    const formData = {
      name: userRef.current.value,
      title: titleRef.current.value,
      body: bodyRef.current.value,
      id: Date.now().toString()
    };

    console.log("Form submitted:", formData);
    dispatch(createPost(formData))

    userRef.current.value = '';
    titleRef.current.value = '';
    bodyRef.current.value = '';
    setIsFormValid(false)
  };

  return (
    <form onSubmit={onSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        Create Blog
      </h2>

      <div className="mb-4">
        <label
          htmlFor="userId"
          className="block text-gray-700 font-semibold mb-2"
        >
          User
        </label>
        <input
          type="text"
          id="userId"
          ref={userRef} 
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black"
          placeholder="User Name"
          onChange={checkFormValidity} 
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-gray-700 font-semibold mb-2"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          ref={titleRef} 
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black"
          placeholder="Blog Title"
          onChange={checkFormValidity}
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="body"
          className="block text-gray-700 font-semibold mb-2"
        >
          Body
        </label>
        <textarea
          id="body"
          ref={bodyRef} 
          className="w-full max-w-md px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black resize-none"
          placeholder="Write your blog content here..."
          rows="4"
          onChange={checkFormValidity} 
        ></textarea>
      </div>

      <button
        type="submit"
        className={`w-full font-semibold py-2 rounded-md transition duration-200 
          ${isFormValid ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-400 cursor-not-allowed'}`}
        disabled={!isFormValid} 
      >
        {!isFormValid ? "Add all fields !!" : "Create Blog"}
      </button>
    </form>
  );
};

export default BlogForm;
