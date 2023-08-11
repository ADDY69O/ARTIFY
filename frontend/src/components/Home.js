import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Feed from "./Feed";
import Users from "./Users";

function Home() {
  return (
    <Feeed>
      {/* <div className="leftMenu">left</div> */}
      <div className="feed">
        <Feed />
      </div>
      <div className="users">
        <Users />
      </div>
    </Feeed>
  );
}

const Feeed = styled.div`
  background-color: #f0f2f5;
  display: flex;
  flex-direction: row;
  justify-content: center;

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
