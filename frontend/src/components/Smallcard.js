import React, { useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
// import { ChatState } from "../Context/ChatProvider";

const Smallcard = ({ user }) => {
  const navigate = useNavigate();
  // const { selectedUser } = ChatState();
=======
const Smallcard = ({ user }) => {
  const navigate = useNavigate();

>>>>>>> ef0438f4d61a9a05955611cb40f0edadf3c6e99a
  return (
    <UserFeed>
      <div className="inner">
        <img src={user.image} alt="" />
        <p>{user.name}</p>
      </div>

      <button onClick={() => navigate(`/about/${user._id}`)}>View</button>
      <hr />
    </UserFeed>
  );
};
const UserFeed = styled.div`
  background-color: #f0f2f5;
  display: flex;
  width: 100%;
  justify-content: space-between;
  /* background-color: blue; */
  align-items: center;

  margin: 10px 0;
  .inner {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  button {
    text-align: end;
  }

  img {
    width: 60px;
    height: 57px;
    border-radius: 50%;
    min-zoom: 20%;
    overflow: hidden;
  }
`;

export default Smallcard;
