import React from "react";
import styled from "styled-components";

function Navbar() {
  return (
    <Wrapper>
      {/* <img src="logoGen.webp" alt="logo" />
       */}
      <h3>🤣 MemeSocio</h3>
      <h3>My Account</h3>
    </Wrapper>
  );
}

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
`;

export default Navbar;
