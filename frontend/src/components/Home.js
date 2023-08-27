  import React, { useEffect, useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import styled from "styled-components";
  import { loadmyPost, loadPost } from "../Redux/Actions/Post";
  import { AllUser } from "../Redux/Actions/User";
  import Feed from "./Feed";
  // import { ChatState } from "../Context/ChatProvider";

  import Users from "./Users";

<<<<<<< HEAD
  const Home = () => {
    // const { user } = ChatState();
    // console.log(user);
    const dispatch = useDispatch();
   
=======
const Feeed = styled.div`
  background-color: #f0f2f5;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100%;
>>>>>>> ef0438f4d61a9a05955611cb40f0edadf3c6e99a

    useEffect(() => {
      // console.log(localStorage.getItem("userInfo"));
      const update = async () => {
        await dispatch(loadPost());
        await dispatch(AllUser());
        await dispatch(loadmyPost());
      };
      update();
    }, []);
    return (
      <Feeed>
        {/* <div className="leftMenu">left</div> */}
        <div className="feed">
          <Feed />
        </div>
        <div className="users">  <Users /></div>
      </Feeed>
    );
  };

  const Feeed = styled.div`
    background-color: #f0f2f5;
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 100%;

    .feed {
      /* background-color: green; */
      width: 50vw;
      height: 100vh;
    }
    .users {
      /* background-color: yellow; */
      width: 22vw;
      height: 100vh;
    }
  `;

  export default Home;
