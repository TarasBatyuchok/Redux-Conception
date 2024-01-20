import React, { FC } from 'react';
import { IPost } from "../models/IPost";


interface PostItemProps{
  post: IPost;
}


const PostItem: FC<PostItemProps> = ({post}) => {
  return (
    <div className='w-full border border-gray-500 p-4 flex justify-between gap-5'>
      {post.id} {post.title}
      <button  className=' bg-slate-500 p-1 text-white'>Delete</button>
    </div>
  )
}

export default PostItem