import React from "react";
import styled from "styled-components";

const Smallcard = ({ user }) => {
  return (
    <UserFeed>
      <div className="inner">
        <img src={user.image} alt="" />
        <p>{user.name}</p>
      </div>

      <button>View</button>
      <hr />
    </UserFeed>
  );
};
const UserFeed = styled.div`
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

  .img {
    width: 50px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
  }
`;

export default Smallcard;
