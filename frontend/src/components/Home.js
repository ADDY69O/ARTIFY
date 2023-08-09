import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Feed from "./Feed";

function Home() {
  return (
    <Feeed>
      {/* <div className="leftMenu">left</div> */}
      <div className="feed">
        <Feed />
      </div>
      <div className="users">users</div>
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
    background-color: yellow;
    width: 20vw;
    height: 100vh;
  }
`;

export default Home;
