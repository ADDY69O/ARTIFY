import React from "react";
import styled from "styled-components";
import { BiLike, BiCommentDetail } from "react-icons/bi";

const Card = ({ post }) => {
  // console.log(post);
  return (
    <Wrapper>
      <div className="upper">
        <img
          className="profileCard"
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />

        <p className="Name">Aryan</p>
      </div>

      <img className="main" src={post.image} alt="" />
      <div className="icons">
        <BiLike size={30} /> <BiCommentDetail size={30} />
      </div>
      <h3 className="title">{post.message}</h3>
      <p className="time">created at : {post.createdAt.slice(0, 10)}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #ffffff;
  border: 2px solid black;
  width: 660px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 40px;
  .main {
    width: 650px;
    height: fit-content;
    object-fit: cover;
  }
  .profileCard {
    /* margin: 10px; */
    width: 50px;
    height: 55px;
    overflow: hidden;
    border-radius: 50%;
    margin: 10px;
    padding-bottom: 2px;
  }
  .upper {
    height: 60px;
    width: 100%;
    display: flex;
    text-align: center;
    gap: 8px;
    /* margin: 10px; */
    p {
      text-align: center;
      padding-top: 20px;
    }
  }
  .time {
    text-align: right;
    margin-right: 5px;
  }
  .title {
    margin: auto;
  }
`;

export default Card;
