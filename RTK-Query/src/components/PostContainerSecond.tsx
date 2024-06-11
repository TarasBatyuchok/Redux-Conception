import React, {useEffect, useState} from "react";
import {postAPI} from "../services/PostServices";
import PostItem from "./PostItem";

import { IPost } from "../models/IPost";

function PostContainerSecond() {
  const [limit, setLimit] = useState(100)
  const { data: posts, error, isLoading, refetch } = postAPI.useFetchAllPostsQuery(limit, {
    //pollingInterval: null
  });
  const [createPost, {}] = postAPI.useCreatePostMutation();
  const [updatePost, {}] = postAPI.useUpdatePostMutation();
  const [deletePost, {}] = postAPI.useDeletePostMutation();

  // refetch викликається коли нам потрібно весь час оновлювати данні
  // pollingInterval , буде відправлятися запит кожні паро секунд

  // демонстрація хешування 
  // useEffect(()=>{
  //     setTimeout(()=>{
  //         setLimit(3)
  //     }, 2000)
  // },[])


const handleRemove = (post: IPost) => {
   console.log(post)
    deletePost(post)
}

const handleUpdate = (post: IPost) => {
    updatePost(post)
}

  const handleCreate = async()=>{

      const title = prompt();
      const postId = posts ? posts.length + 1 : 0;
      // console.log(title)
      await createPost({id:`${postId}`,  title: `${title} ${postId}` , body: title} as IPost);
  }

  return(
    <div className="flex flex-col gap-3 mt-3">
      <button className="border border-red-500" onClick={() => refetch()}>Refetch</button>
      <button className="border border-green-400" onClick={handleCreate}>Add new post</button>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Error</h1>}
      {posts?.map( (post, id)=>
        <PostItem remove={handleRemove}  update={handleUpdate} key={id} post={post} />
      )}
    </div>
  );
};

export default PostContainerSecond;