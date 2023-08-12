import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
function About() {
  const [user, setUser] = useState([]);
  const { id } = useParams();
  const sinUser = async () => {
    try {
      console.log(localStorage.getItem("userInfo"));
      const option = {
        method: "get",
        headers: {
          authorization: `Bearer ${localStorage.getItem("userInfo")}`,
          "Content-Type": "application/json",
        },
      };

      const response = await fetch(
        `http://localhost:8000/api/v1/user/${id}`,
        option
      );

      const res = await response.json();
      console.log(res.user);
      await setUser(res.user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    sinUser();
  }, []);

  return (
    <Wrapper>
      <div className="upper">
        <img src={user.image} alt="" />
        <div className="desc">
          <h1>{user.name}</h1>
          <div className="stats">
            <p>{user.posts ? user.posts.length : 0} posts</p>
            <p>{user.followers ? user.followers.length : 0} followers</p>
            <p>{user.following ? user.following.length : 0} following</p>
          </div>
          <button>follow</button>
        </div>
      </div>
      <div className="lower">
        <div className="lower">
          {user.posts ? (
            user.posts.map((post) => (
              <img src={post.image} alt="" key={post.id} /> // Make sure to add a unique key for each rendered element
            ))
          ) : (
            <p>No posts available</p>
          )}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #f0f2f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .upper {
    display: flex;
    gap: 60px;
    width: 33%;
    height: 250px;

    margin-top: 0.5rem;
    img {
      border-radius: 50%;
      width: 220px;
      height: 230px;
    }
    .stats {
      display: flex;
      gap: 30px;
    }

    .desc {
      font-size: 1.2rem;
      text-align: center;
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 1rem;
      h1 {
        margin: 9px 0;
      }
      button {
        width: 80px;
        background-color: blue;
        color: #fff;
        height: 35px;
      }
    }
  }
  .lower {
    margin-top: 7vh;
    width: 1200px;

    display: grid;
    grid-template-columns: 450px 450px 450px;
    grid-template-rows: 600px 600px 600px;
    gap: 15px;
    img {
      object-fit: cover;
      width: 400px;
      height: 600px;
      border: 2px solid black;
    }
  }
`;

export default About;
