import axios from "axios";
export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "loginRequest",
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "http://localhost:8000/api/v1/user/login",
      { email, password },
      config
    );
    localStorage.setItem("userInfo", data.token);
    dispatch({
      type: "loginSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "loginFailure",
      payload: error.response.message,
    });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "loadUserRequest",
    });

    const option = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("userInfo")}`,
      },
    };
    const { data } = await axios.get(
      "http://localhost:8000/api/v1/user/load",

      option
    );

    console.log(data);

    dispatch({
      type: "loadUserSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "loadUserFailure",
      payload: error.response.message,
    });
  }
};
export const AllUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "AllUserRequest",
    });

    const option = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("userInfo")}`,
      },
    };
    const { data } = await axios.get(
      "http://localhost:8000/api/v1/user/log/all",

      option
    );

    dispatch({
      type: "AllUserSuccess",
      payload: data.Alluser,
    });
  } catch (error) {
    dispatch({
      type: "AllUserFailure",
      payload: error.response.message,
    });
  }
};
export const followUser = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "followRequest",
    });

    const option = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("userInfo")}`,
      },
    };
    const { data } = await axios.get(
      `http://localhost:8000/api/v1/user/log/${id}`,

      option
    );

    dispatch({
      type: "followSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "followFailure",
      payload: error.response.message,
    });
  }
};
export const singleUser = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "singleUserRequest",
    });

    const option = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("userInfo")}`,
      },
    };
    const { data } = await axios.get(
      `http://localhost:8000/api/v1/user/${id}`,

      option
    );

    dispatch({
      type: "singleUserSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "singleUserFailure",
      payload: error.response.message,
    });
  }
};
