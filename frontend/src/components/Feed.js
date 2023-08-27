  import React, { useContext, useEffect, useState } from "react";
  import styled from "styled-components";
  import Card from "./Card";
  // import { ChatState } from "../Context/ChatProvider";
  import { useDispatch, useSelector } from "react-redux";
  import { createPost, loadPost } from "../Redux/Actions/Post";
  import { Toast } from "@chakra-ui/react";
import { loadUser } from "../Redux/Actions/User";

  const Feed = () => {
    // const { posts, setposts, selectedPost, setSelectedPost } = ChatState();
    const dispatch = useDispatch();
    const { posts } = useSelector((state) => state.posts);
    // const getAllpost = async () => {
    //   try {
    //     const option = {
    //       method: "get",
    //       headers: {
    //         authorization: `Bearer ${localStorage.getItem("userInfo")}`,
    //       },
    //     };

    //     const response = await fetch(
    //       "http://localhost:8000/api/v1/post/all",
    //       option
    //     );

    //     const res = await response.json();
    //     setposts(res);
    //   } catch (error) {
    //     console.log(error);
    //   ]}
    // };

<<<<<<< HEAD
    const [image, setImage] = useState(null);
    const [message, setMessage] = useState("");

    const handleImageChange = async(event) => {
    
      const data = new FormData();
          data.append("file", event.target.files[0]);
          data.append("upload_preset", "chat-app");
          data.append("cloud_name", "dwhaatbao");

          const res = await fetch(
            "https://api.cloudinary.com/v1_1/dwhaatbao/image/upload",
            {
              method: "post",
              body: data,
            }
          )
            .then((res) => res.json())
            .then((data) => {
              setImage(data.url.toString());
            
              console.log(data.url.toString());
            
              Toast({
                title: "image uploaded !",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "bottom",
              });
              return;
            })
            .catch((err) => {
              console.log(err);
            
              return;
            });
    };

    const handleCreatePost = async() => {
      console.log("in the create post handle");
      const formData = new FormData();
      formData.append("image", image);
      formData.append("message", message);
      // console.log(formData.get("message"));
      dispatch(createPost(formData.get("message"),formData.get("image")));

      // // Clear the form fields
      setImage(null);
      setMessage("");
      await dispatch(loadUser());
    };

    
    return (
      <Wrapper>
        <div>
        <h2>Create a New Post</h2>
        {image == null ?<input type="file" onChange={handleImageChange} accept="image/*" />
        :
        <div>
          <img src={image} /> 
          <button onClick={()=> setImage(null)}>Remove Image</button>
        </div>}
    
        
        <textarea
          placeholder="Write your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button onClick={() => handleCreatePost()}>Create Post</button>
        </div>
        {posts && posts.map((post, index) => <Card post={post} key={post._id} />)}
      </Wrapper>
=======
      const res = await response.json();
      setposts(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    localStorage.setItem(
      "userInfo",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDcxYzI0NDk0MThjODRmNjdkYjAwMSIsImlhdCI6MTY5MTgxOTA3MCwiZXhwIjoxNjk0NDExMDcwfQ.mkKHbbMFiQjmMzGkOmemASj3bHKwNaQDEUC50sk8_E0"
>>>>>>> ef0438f4d61a9a05955611cb40f0edadf3c6e99a
    );
  };

<<<<<<< HEAD
  const Wrapper = styled.div`
    background-color: #f0f2f5;
    margin: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
=======
const Wrapper = styled.div`
  background-color: #f0f2f5;
  margin: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
>>>>>>> ef0438f4d61a9a05955611cb40f0edadf3c6e99a

    input[type="file"] {
      margin-bottom: 12px;
    }

    textarea {
      width: 100%;
      padding: 8px;
      margin-bottom: 12px;
    }

    button {
      padding: 8px 16px;
      background-color: #007bff;
      color: #fff;
      border: none;
      cursor: pointer;
    }
  `;

  export default Feed;
