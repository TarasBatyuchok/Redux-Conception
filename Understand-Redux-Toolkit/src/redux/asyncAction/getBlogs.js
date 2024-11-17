import { addPostsBlog } from "../slices/blogSlice"
import * as api from '../../api/index';


export const getPost = () => async (dispatch) => {
  try {
    const { data } = await api.fetchData();
    console.log("Fetched Data:", data); 
    dispatch(addPostsBlog(data));
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

