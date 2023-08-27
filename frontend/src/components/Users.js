import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Smallcard from "./Smallcard";
// import { ChatState } from "../Context/ChatProvider";
import { useDispatch, useSelector } from "react-redux";
import { AllUser } from "../Redux/Actions/User";

const Users = () => {
  // const [allUsers, setAllusers] = useState([]);
  // const { allUsers, setAllusers, setSelecteduser, user } = ChatState();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);
  const { allUser} = useSelector((state) => state.user);
  // const { AllUser } = useSelector((state) => state.AllUser);
  // const getAllusers = async () => {
  //   try {
  //     const option = {
  //       method: "get",
  //       headers: {
  //         authorization: `Bearer ${localStorage.getItem("userInfo")}`,
  //         "Content-Type": "application/json",
  //       },
  //     };

<<<<<<< HEAD
  //     const response = await fetch(
  //       `http://localhost:8000/api/v1/user/log/all`,
  //       option
  //     );
=======
      const response = await fetch(
        `http://localhost:8000/api/v1/user/log/all`,
        option
      );
>>>>>>> ef0438f4d61a9a05955611cb40f0edadf3c6e99a

  //     const res = await response.json();
  //     console.log(res.Alluser);
  //
  //     setAllusers(res.Alluser);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  

  return (
    <div>
    {user && allUser ? (
      <Wrapper>
        <div className="upper">
          <img className="profileCard" src={user.image} alt="" />
          <p className="Name">{user.name}</p>
        </div>
        <h2>You can visit them</h2>
        <div>
          {allUser.map((singleUser) => (
            <Smallcard user={singleUser} key={singleUser._id} />
          ))}
        </div>
      </Wrapper>
    ) : (
      <h1></h1>
    )}
  </div>
  );
};

const Wrapper = styled.div`
  background-color: #f0f2f5;
  margin-top: 78px;
  width: 100%;
  h2 {
    margin: 20px 0;
  }
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
  }
  .upper {
    display: flex;
    gap: 10px;
    align-items: center;
    /* background-color: green; */
  }
`;
export default Users;
