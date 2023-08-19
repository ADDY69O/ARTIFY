import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
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
  .tt {
    cursor: pointer;
  }
`;

export default Navbar;
