import React, {useEffect, useState} from "react";
import {postAPI} from "../services/PostServices";
import PostItem from "./PostItem";

function PostContainerSecond() {
  const [limit, setLimit] = useState(10)
  const { data: posts, error, isLoading, refetch } = postAPI.useFetchAllPostsQuery(limit, {
    // pollingInterval: null
  });

  // refetch викликається коли нам потрібно весь час оновлювати данні
  // pollingInterval , буде відправлятися запит кожні паро секунд


  // useEffect(()=>{
  //     setTimeout(()=>{
  //         setLimit(3)
  //     }, 2000)
  // },[])

  return(
    <div className="flex flex-col gap-3 mt-3">
      <button className=" border border-red-500" onClick={() => refetch()}>Refetch</button>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Error</h1>}
      {posts?.map( post=>
        <PostItem key={post.id} post={post} />
      )}
    </div>
  );
};

export default PostContainerSecond;