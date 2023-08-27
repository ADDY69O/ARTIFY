import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BiLike, BiCommentDetail, BiSolidLike } from "react-icons/bi";
import { TbSquareRoundedArrowRight } from "react-icons/tb";
<<<<<<< HEAD
import { AiFillDelete } from "react-icons/ai";
import CommentModal from "./CommentModal";
import { useDispatch, useSelector } from "react-redux";
import { addComment, deletePost, likePost, loadmyPost, loadPost } from "../Redux/Actions/Post";

// import { ChatState } from "../Context/ChatProvider";
=======
import CommentModal from "./CommentModal";
>>>>>>> ef0438f4d61a9a05955611cb40f0edadf3c6e99a

const Card = ({ post }) => {
  const dispatch = useDispatch();
  const { user, isAuthenticate } = useSelector((state) => state.user);
  // console.log(post);
<<<<<<< HEAD
  // const {
  //   likeUser,
  //   setlikeUser,
  //   selectedPost,
  //   setSelectedPost,
  //   comments,
  //   setComments,
  //   user,
  // } = ChatState();

  // const [likeUser, setlikeUser] = useState([]);

  // const [checkLike, setCheckLike] = useState(false);
  const [comment, setComment] = useState("");
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [comments, setComments] = useState([]);
  // const isliked = () => {
  //   if (post.likes && user) {
  //     console.log(post.likes);
  //     post.likes.forEach(function (item, index) {
  //       console.log(user._id);
  //       if (item._id == user._id) {
  //         console.log("In the useEffect of isliked");
  //         setCheckLike(true);
  //       }
  //     });
  //   }
  // };
  const [like, setlike] = useState(false);

  const handleLike = async () => {
    try {
      await dispatch(likePost(post._id)); // Wait for the likePost action to finish
      await dispatch(loadPost()); // Wait for the loadPost action to finish
      await dispatch(loadmyPost());
      setlike(!like);

      // const reqId = localStorage.getItem("userInfo");
      // const option = {
      //   method: "get",
      //   headers: {
      //     authorization: `Bearer ${localStorage.getItem("userInfo")}`,
      //   },
      // };

      // const response = await fetch(
      //   `http://localhost:8000/api/v1/post/${id}`,
      //   option
      // );

      // const res = await response.json();
      // console.log(res.post.likes);
      // // setlikeUser(res.post);
      // setSelectedPost(res.post);
      // setCheckLike(!checkLike);
=======

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
>>>>>>> ef0438f4d61a9a05955611cb40f0edadf3c6e99a
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
<<<<<<< HEAD
      if (isAuthenticate) {
        console.log(`${localStorage.getItem("userInfo")}`);
        await dispatch(addComment(comment, post._id));
        await dispatch(loadPost());
        await dispatch(loadmyPost());
      }
=======
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
>>>>>>> ef0438f4d61a9a05955611cb40f0edadf3c6e99a
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
<<<<<<< HEAD
      // setComments(post.comments);
=======
      setComments(post.comments);
>>>>>>> ef0438f4d61a9a05955611cb40f0edadf3c6e99a
      setShowCommentModal(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
<<<<<<< HEAD
    if (post.likes) {
      post.likes.forEach((item, index) => {
        if (item._id === user._id) {
          setlike(true);
        }
      });
    }
  }, []);

  const  handleDeletePost = async(id)=>{

    await dispatch(deletePost(id));
    await dispatch(loadPost());
    await dispatch(loadmyPost());

  }


=======
    isliked();
  }, []);

>>>>>>> ef0438f4d61a9a05955611cb40f0edadf3c6e99a
  return (
    <Wrapper>
      <div className="section">
      <div className="upper">
        <img className="profileCard" src={post.createdBy.image} alt="" />
<<<<<<< HEAD

        <p className="Name">{post.createdBy.name}</p>



=======

        <p className="Name">{post.createdBy.name}</p>
>>>>>>> ef0438f4d61a9a05955611cb40f0edadf3c6e99a
      </div>

      {post.createdBy._id === user._id ? <AiFillDelete size={30} onClick={()=> handleDeletePost(post._id)} className="delete"/> : <h1></h1>}
      </div>
      

      <img className="main" src={post.image} alt="" />
      <div className="icons">
<<<<<<< HEAD
        <div className="iconInner">
        {like ? (
=======
        {checkLike ? (
>>>>>>> ef0438f4d61a9a05955611cb40f0edadf3c6e99a
          <BiSolidLike size={30} onClick={() => handleLike(post._id)} />
        ) : (
          <BiLike size={30} onClick={() => handleLike(post._id)} />
        )}
<<<<<<< HEAD
        <BiCommentDetail size={30} onClick={() => setShowCommentModal(true)} />
        </div>
        
        <p className="likke">
          {post.likes && post.likes.length > 0
            ? `${post.likes.length} likes`
            : "0 likes"}
        </p>
=======
        <BiCommentDetail size={30} onClick={handleCommentIconClick} />
        <p>{likeUser.likes ? likeUser.likes.length : "0"}</p>
>>>>>>> ef0438f4d61a9a05955611cb40f0edadf3c6e99a
      </div>
      <h3 className="title">{post.message}</h3>
      <p className="time">created at : {post.createdAt.slice(0, 10)}</p>
      {showCommentModal && (
        <CommentModal
<<<<<<< HEAD
          comments={post.comments}
=======
          comments={comments}
>>>>>>> ef0438f4d61a9a05955611cb40f0edadf3c6e99a
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
<<<<<<< HEAD

  .iconInner{
    display: flex;
    justify-content: space-around;
  }
  .likke{
    font-size: 1.2rem;
    margin-left:20px
  }
  .section{
    display: flex;
    justify-content: space-around;
    .delete{
      margin-top: 17px;
      cursor: pointer;
    }
  }

=======
>>>>>>> ef0438f4d61a9a05955611cb40f0edadf3c6e99a
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
    font-size: 1.5rem;
  }
`;

export default Card;
