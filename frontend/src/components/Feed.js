import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";

function Feed() {
  const [posts, setposts] = useState([]);

  const getAllpost = async () => {
    try {
      const option = {
        method: "get",
        headers: {
          authorization: `Bearer ${localStorage.getItem("userInfo")}`,
        },
      };

      const response = await fetch(
        "http://localhost:8000/api/v1/post/all",
        option
      );

      const res = await response.json();
      setposts(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    localStorage.setItem(
      "userInfo",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDcxYzI0NDk0MThjODRmNjdkYjAwMSIsImlhdCI6MTY5MTgxOTA3MCwiZXhwIjoxNjk0NDExMDcwfQ.mkKHbbMFiQjmMzGkOmemASj3bHKwNaQDEUC50sk8_E0"
    );
    getAllpost();
  }, []);
  // console.log(posts);
  return (
    <Wrapper>
      {posts.map((post) => (
        <Card post={post} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #f0f2f5;
  margin: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Feed;
