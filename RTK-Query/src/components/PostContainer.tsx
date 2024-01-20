import React, {useState} from "react";
import {postAPI} from "../services/PostServices";
import PostItem from "./PostItem";
import { current } from "@reduxjs/toolkit";
import { IPost } from "../models/IPost";

function PostContainer() {
  const [limit, setLimit] = useState(10)
  const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(limit);


  const handlerLimitSwitch =(value: string)=>{
    const numericValue: number = Number(value);
      setLimit( numericValue)
  }
  const handlerCustomLimit =() =>{
     let number  = prompt();
     const numericValue: number = Number(number);
     setLimit( numericValue)

  }

  const [updatePost, {}] = postAPI.useDeletePostMutation();
  const [deletePost, {}] = postAPI.useUpdatePostMutation();


  const handleRemove =(post: IPost) =>{
    deletePost(post)
}
const handleUpdate =(post: IPost) =>{
    updatePost(post)
}

  return(
    <div className="flex flex-col gap-3 mt-3">
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Error</h1>}
       <ul className="flex gap-4">
        <li className="p-2 border border-gray-500 cursor-pointer hover:bg-slate-400" onClick={(event) =>handlerLimitSwitch(event.currentTarget.innerText)}>1</li>
        <li className="p-2 border border-gray-500 cursor-pointer hover:bg-slate-400" onClick={(event) =>handlerLimitSwitch(event.currentTarget.innerText)}>2</li>
        <li className="p-2 border border-gray-500 cursor-pointer hover:bg-slate-400"onClick={(event) =>handlerLimitSwitch(event.currentTarget.innerText)}>3</li>
        <li className="p-2 border border-gray-500 cursor-pointer hover:bg-slate-400"onClick={(event) =>handlerLimitSwitch(event.currentTarget.innerText)}>4</li>
        <li className="p-2 border border-gray-500 cursor-pointer hover:bg-slate-400"onClick={(event) =>handlerLimitSwitch(event.currentTarget.innerText)}>5</li>
        <li className="p-2 border border-gray-500 cursor-pointer hover:bg-slate-400"onClick={(event) =>handlerLimitSwitch(event.currentTarget.innerText)}>6</li>
        <li className="p-2 border border-gray-500 cursor-pointer hover:bg-slate-400"onClick={(event) =>handlerLimitSwitch(event.currentTarget.innerText)}>10</li>
        <li className="p-2 border border-gray-500 cursor-pointer hover:bg-slate-400"onClick={handlerCustomLimit}>custom</li>
       </ul>
      {posts?.map( post=>
            <PostItem remove={handleRemove}  update={handleUpdate} key={post.id} post={post} />
      )}
    </div>
  );
};

export default PostContainer