import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Smallcard from "./Smallcard";

const Users = () => {
  const [allUsers, setAllusers] = useState([]);

  const getAllusers = async () => {
    try {
      const option = {
        method: "get",
        headers: {
          authorization: `Bearer ${localStorage.getItem("userInfo")}`,
          "Content-Type": "application/json",
        },
      };

      const response = await fetch(
        `http://localhost:8000/api/v1/user/log/all`,
        option
      );

      const res = await response.json();
      console.log(res.Alluser);
      setAllusers(res.Alluser);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllusers();
  }, []);
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
      <h2>You can visit them</h2>
      <div>
        {allUsers.map((user) => (
          <Smallcard user={user} key={user._id} />
        ))}
      </div>
    </Wrapper>
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
