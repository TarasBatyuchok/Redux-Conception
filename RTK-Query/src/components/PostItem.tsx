import React, { FC } from 'react';
import { IPost } from "../models/IPost";


interface PostItemProps{
  post: IPost;
  remove: (post: IPost) => void;
  update: (post: IPost) => void;
}


const PostItem: FC<PostItemProps> = ({post, remove, update}) => {


  const handleRemove = (event: React.MouseEvent) => {
    event.stopPropagation()
    remove(post)
}

const handleUpdate = (event: React.MouseEvent) => {
    const title = prompt() || ""
    update({...post, title: `${title}`})
}
  return (
    <div className='w-full border border-gray-500 p-4 flex justify-between gap-5' onClick={handleUpdate}>
      {post.id} {post.title}
      <button  className=' bg-slate-500 p-1 text-white' onClick={handleRemove}>Delete</button>
    </div>
  )
}

export default PostItem