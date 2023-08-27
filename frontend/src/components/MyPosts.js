
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components';
import { loadmyPost } from '../Redux/Actions/Post';
import Card from './Card';

const MyPosts = () => {

  const dispatch = useDispatch();
  const {Myposts} = useSelector((state)=> state.posts);

  useEffect(() => {
    const chn = async()=>{


      await dispatch(loadmyPost());
    }
    chn();
  }, [])
  

  return (
    <Wrapper>
       
       {Myposts && Myposts.map((post, index) => <Card post={post} key={post._id} />)}
        </Wrapper>
  )
}

const Wrapper = styled.div`
    background-color: #f0f2f5;
    margin: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default MyPosts