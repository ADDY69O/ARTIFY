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
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YzRiZDg0ZmQyOTcwNzQ5YWZiYjI3OSIsImlhdCI6MTY5MTU2MTU1NiwiZXhwIjoxNjk0MTUzNTU2fQ.MfossD64gxe102afXg9fGlNW93Wrc-JF4ASIXUBZP8g"
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
  margin: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Feed;
