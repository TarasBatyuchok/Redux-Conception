import axios from 'axios';


const url = axios.create({ baseURL: import.meta.env.VITE_API_URL });



export const fetchData = () => url.get("/blogs");
export const addPost = (newPost) => url.post("/blogs", newPost);
export const deletePost = (id) => url.delete(`/blogs/${id}`);
export const likePost  =(id) => url.patch(`/posts/${id}/likePost`);

// export const fetchPosts = () => axios.get(url);
// export const createPost = (newPost) => axios.post(url, newPost);
// export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
// export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
// export const deletePost = (id) => axios.delete(`${url}/${id}`);