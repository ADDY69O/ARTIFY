import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
// import { ChatState } from "../Context/ChatProvider";
import {
  FormControl,
  FormLabel,
  VStack,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { loginUser } from "../Redux/Actions/User";
const Login = () => {
  // const { setuser } = ChatState();
  const toast = useToast();
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const [show, setshow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleonClick = () => {
    setshow(!show);
  };
  const submitHandler = (e) => {
    // setloading(true);
    e.preventDefault();
    // try {
    dispatch(loginUser(email, password));
    navigate("/home");
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // };

    // const res = await axios.post(
    //   "http://localhost:8000/api/v1/user/login",
    //   { email, password },
    //   config
    // );
    // // console.log(res);
    // toast({
    //   title: `Login Successfull`,
    //   status: "success",
    //   duration: 5000,
    //   isClosable: true,
    //   position: "top",
    // });
    // console.log(res);
    // localStorage.setItem("userInfo", res.data.token);

    // setloading(false);
    // console.log(res);/
    //   setuser(email);

    // //   // navigate("/home");
    // // } catch (error) {
    // //   console.log(error);
    // //   toast({
    // //     title: "Error Occured!",
    // //     description: `${error}`,
    // //     status: "error",
    // //     duration: 5000,
    // //     isClosable: true,
    // //     position: "top",
    // //   });
    // //   setloading(false);
    // // }
  };
  return (
    <VStack spacing={"5px"}>
      <FormControl isRequired id="email">
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl isRequired id="password">
        <FormLabel>Password</FormLabel>

        <InputGroup>
          <Input
            placeholder="Enter your Password "
            type={show ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width={"4.5rem"}>
            <Button h={"1.75rem"} size="sm" onClick={handleonClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={loading}
      >
        Login
      </Button>
      <Button
        variant={"solid"}
        colorScheme="red"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={() => {
          navigate("/signUp");
        }}
      >
        Signup
      </Button>
    </VStack>
  );
};

export default Login;
