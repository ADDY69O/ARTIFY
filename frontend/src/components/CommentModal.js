import React from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  max-height: 80vh;
  overflow-y: auto;
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  color: #555;
  font-size: 18px;
  cursor: pointer;
`;

const CommentList = styled.ul`
  list-style: none;

  padding: 0;
  margin: 6px 0;
  .single {
    margin: 10px 0;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    gap: 20px;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }

    .cc {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
  }
`;

const CommentItem = styled.li`
  margin: 8px 0;
`;

const CustomScrollbar = styled.div`
  height: 8px;
  width: 100%;
  background-color: #f1f1f1;
  position: relative;

  &::after {
    content: "";
    background-color: #888;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${({ scrollPercentage }) => scrollPercentage}%;
    transition: width 0.2s ease-in-out;
  }
`;

const CommentModal = ({ comments, onClose }) => {
  const CommentListRef = React.createRef();

  const calculateScrollPercentage = () => {
    const scrollableHeight =
      CommentListRef.current.scrollHeight - CommentListRef.current.clientHeight;
    const scrollPercentage =
      (CommentListRef.current.scrollTop / scrollableHeight) * 100;
    return scrollPercentage;
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <div className="head">
          <h2>Comments</h2>
          <CloseButton onClick={onClose}>
            <AiOutlineClose size={30} />
          </CloseButton>
        </div>
        <CommentList ref={CommentListRef}>
          {comments.map((comment) => (
            <CommentItem key={comment.user._id}>
              <CommentItem key={comment.user._id}>
                <div className="single">
                  <img src={comment?.user ? comment.user.image : ""} alt="" />
                  <div className="cc">
                    <p>{comment?.user ? comment.user.name + " -" : null}</p>
                    <p>{comment?.comment ? comment.comment + " -" : null}</p>
                  </div>
                </div>
                <hr />
              </CommentItem>
            </CommentItem>
          ))}
        </CommentList>
        {CommentListRef.current &&
          CommentListRef.current.scrollHeight >
            CommentListRef.current.clientHeight && (
            <CustomScrollbar scrollPercentage={calculateScrollPercentage()} />
          )}
      </ModalContent>
    </ModalOverlay>
  );
};

export default CommentModal;
