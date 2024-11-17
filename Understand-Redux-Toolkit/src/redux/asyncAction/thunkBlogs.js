import { addPostsBlog } from "../slices/blogSlice";
import * as api from "../../api/index";

export const getPost = () => async (dispatch) => {
  try {
    const { data } = await api.fetchData();
    console.log("Fetched Data:", data);
    dispatch(addPostsBlog(data));
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

export const createPost = (newPost) => async (dispatch) => {
  // console.log(newPost);
  try {
    await api.addPost(newPost);

    dispatch(getPost());
  } catch (error) {
    console.error("Error creating post:", error);
  }
};


export const deletePost = (postId) => async (dispatch) => {
  try {  
    console.log(postId)
    await api.deletePost(postId).then(() => console.log("Deleted successfully"));
  
    dispatch(getPost()); 
  } catch (error) {
    console.error("Error deleting post:", error);
  }
};
