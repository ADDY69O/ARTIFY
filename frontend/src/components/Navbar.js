import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
import { loadPost } from "../Redux/Actions/Post";

const Navbar = () => {

  const {user} = useSelector((state)=> state.user);
  const {posts}=useSelector((state)=>state.posts);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    
    navigate('/')
  };

  const handlePosts = ()=>{
    console.log(user._id);
      navigate(`/posts/${user._id}`)
  
  }

  return (
    <Wrapper>
      <h3 className="tt" onClick={() => navigate("/home")}>
        🤣 MemeSocio
      </h3>
      <div className="options">
        {posts ? (
          <>
            <h3 onClick={handlePosts} className="MyPosts">
              My Posts
            </h3>
            <h3 onClick={handleLogout} className="logOut">
              LogOut
            </h3>
          </>
        ) : null}
      </div>
=======
function Navbar() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      {/* <img src="logoGen.webp" alt="logo" />
       */}
      <h3 className="tt" onClick={() => navigate("/")}>
        🤣 MemeSocio
      </h3>
      <h3>My Account</h3>
>>>>>>> ef0438f4d61a9a05955611cb40f0edadf3c6e99a
    </Wrapper>
  );
  };

const Wrapper = styled.div`
  color: black;
  width: 100%;
  height: 60px;
  padding: 20px 40px;
  color: white;
  background-color: black;
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  .tt {
    cursor: pointer;
  }
<<<<<<< HEAD
  .logOut, .MyPosts {
    cursor: pointer;
  }
  .options{
    display: flex;
    gap: 25px;
  }

=======
>>>>>>> ef0438f4d61a9a05955611cb40f0edadf3c6e99a
`;

export default Navbar;
