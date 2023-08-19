import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BiLike, BiCommentDetail, BiSolidLike } from "react-icons/bi";
import { TbSquareRoundedArrowRight } from "react-icons/tb";
import CommentModal from "./CommentModal";

const Card = ({ post }) => {
  // console.log(post);

  const [likeUser, setlikeUser] = useState([]);

  const [checkLike, setCheckLike] = useState(false);
  const [comment, setComment] = useState("");
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [comments, setComments] = useState([]);
  const isliked = () => {
    if (post.likes) {
      post.likes.forEach((item, index) => {
        if (item._id.toString() == "64d71c2449418c84f67db001") {
          setCheckLike(true);
        }
      });
    }
  };
  const handleLike = async (id) => {
    try {
      const reqId = localStorage.getItem("userInfo");
      const option = {
        method: "get",
        headers: {
          authorization: `Bearer ${localStorage.getItem("userInfo")}`,
        },
      };

      const response = await fetch(
        `http://localhost:8000/api/v1/post/${id}`,
        option
      );

      const res = await response.json();
      console.log(res.post.likes);
      setlikeUser(res.post);
      setCheckLike(!checkLike);
      // if (res.post.likes.some((likes) => likes._id == reqId)) {
      //   setCheckLike(true);
      // } else {
      //   setCheckLike(false);
      // }
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = async () => {
    try {
      const option = {
        method: "post",
        headers: {
          "Content-Type": "application/json", // Specify the content type
          authorization: `Bearer ${localStorage.getItem("userInfo")}`,
        },
        body: JSON.stringify({ message: comment }), // Serialize the body as JSON
      };
      const response = await fetch(
        `http://localhost:8000/api/v1/post/${post._id}/comment`,
        option
      );
      const res = await response.json();
      console.log(res);
      setComments(res.comments);
      // setShowCommentModal(true);
      setComment("");
    } catch (error) {
      console.log(error);
    }
  };
  const handleComment = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setComment(e.target.value);
  };
  const handleCommentIconClick = async () => {
    try {
      // const option = {
      //   method: "post",
      //   headers: {
      //     authorization: `Bearer ${localStorage.getItem("userInfo")}`,
      //   },
      // };
      // const response = await fetch(
      //   `http://localhost:8000/api/v1/post/${post._id}`,
      //   option
      // );
      // const res = await response.json();
      setComments(post.comments);
      setShowCommentModal(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    isliked();
  }, []);

  return (
    <Wrapper>
      <div className="upper">
        <img className="profileCard" src={post.createdBy.image} alt="" />

        <p className="Name">{post.createdBy.name}</p>
      </div>

      <img className="main" src={post.image} alt="" />
      <div className="icons">
        {checkLike ? (
          <BiSolidLike size={30} onClick={() => handleLike(post._id)} />
        ) : (
          <BiLike size={30} onClick={() => handleLike(post._id)} />
        )}
        <BiCommentDetail size={30} onClick={handleCommentIconClick} />
        <p>{likeUser.likes ? likeUser.likes.length : "0"}</p>
      </div>
      <h3 className="title">{post.message}</h3>
      <p className="time">created at : {post.createdAt.slice(0, 10)}</p>
      {showCommentModal && (
        <CommentModal
          comments={comments}
          onClose={() => setShowCommentModal(false)}
        />
      )}
      <div className="footer">
        <input
          type="text"
          placeholder="Enter the comment"
          value={comment}
          name=""
          id=""
          onChange={(e) => handleComment(e)}
        />
        <TbSquareRoundedArrowRight size={30} onClick={() => handleSubmit()} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #f0f2f5;

  border: 2px solid black;
  width: 660px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 40px;
  .footer {
    input {
      width: 100%;
      font-size: 1.2rem;
    }
    display: flex;
  }
  .main {
    margin-top: 9px;
    width: 100%;
    height: fit-content;
    object-fit: cover;
    border: 1px solid black;
  }
  .icons {
    cursor: pointer;
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
