import axios from "axios";

export const loadPost = () => async (dispatch) => {
  try {
    dispatch({
      type: "loadPostsRequest",
    });

    const option = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("userInfo")}`,
      },
    };
    const { data } = await axios.get(
      "http://localhost:8000/api/v1/post/all",

      option
    );
    // console.log(data);
    dispatch({
      type: "loadPostsSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "loadPostsFailure",
      payload: error.response.message,
    });
  }
};
export const loadmyPost = () => async (dispatch) => {
  try {
    dispatch({
      type: "loadmyPostsRequest",
    });

    const option = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("userInfo")}`,
      },
    };
    const { data } = await axios.get(
      "http://localhost:8000/api/v1/post/",

      option
    );
    // console.log(data);
    dispatch({
      type: "loadmyPostsSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "loadmyPostsFailure",
      payload: error.response.message,
    });
  }
};


export const likePost = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "likePostsRequest",
    });

    const option = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("userInfo")}`,
      },
    };
    const { data } = await axios.get(
      `http://localhost:8000/api/v1/post/${id}`,

      option
    );

    dispatch({
      type: "likePostsSuccess",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "likePostsFailure",
      payload: error.response.message,
    });
  }
};
export const addComment = (comment, id) => async (dispatch) => {
  try {
    dispatch({
      type: "addCommentRequest",
    });

    const token = localStorage.getItem("userInfo");

    const config = {
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
       
      },
    };

    const requestData = {
      message: comment,
    };

    const response = await axios.post(
      `http://localhost:8000/api/v1/post/${id}/comment`,
      requestData,
      config
    );

    dispatch({
      type: "addCommentSuccess",
      payload: response.data.post.comments,
    });
  } catch (error) {
    console.log(error); // Log the entire error object
    // Check if the error has a response and extract error message
    const errorMessage =
      error.response && error.response.data ? error.response.data.error : "Unknown error";

    dispatch({
      type: "addCommentFailure",
      payload: errorMessage,
    });
  }
};


export const createPost = (message,image) => async (dispatch) => {
  try {
    dispatch({
      type: "addCreatePostRequest",
    });

    const token = localStorage.getItem("userInfo");

    const config = {
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
       
      },
    };

    const requestData = {
      message: message,
      image:image
    };

    const response = await axios.post(
      `http://localhost:8000/api/v1/post/`,
      requestData,
      config
    );

    dispatch({
      type: "addCreatePostSuccess",
      payload: response.data.post,
    });
  } catch (error) {
    console.log(error); // Log the entire error object
    // Check if the error has a response and extract error message
    const errorMessage =
      error.response && error.response.data ? error.response.data.error : "Unknown error";

    dispatch({
      type: "addCreatePostFailure",
      payload: errorMessage,
    });
  }
};
export const deletePost = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deletePostRequest",
    });

    const token = localStorage.getItem("userInfo");

    const config = {
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
       
      },
    };

  

    const response = await axios.delete(
      `http://localhost:8000/api/v1/post/${id}`,
      
      config
    
    );

    dispatch({
      type: "deletePostSuccess",
      payload: response.message,
    });
  } catch (error) {
    console.log(error); // Log the entire error object
    // Check if the error has a response and extract error message
    const errorMessage =
      error.response && error.response.data ? error.response.data.error : "Unknown error";

    dispatch({
      type: "deletePostFailure",
      payload: errorMessage,
    });
  }
};
