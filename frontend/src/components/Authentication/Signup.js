import { Button } from "@chakra-ui/button";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { VStack } from "@chakra-ui/layout";
import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [confirmpassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState();
  const [pic, setPic] = useState();
  const [picloading, setPicLoading] = useState(false);
  const toast = useToast();
  const history = useHistory();
  const handleCLick = () => setShow(!show);

  const submmitHandler = async () => {
    setPicLoading(true);
    if (!name || !email || !password || !confirmpassword) {
      toast({
        title: "Please Fill all the Fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setPicLoading(false);
      return;
    }
    if (password !== confirmpassword) {
      toast({
        title: "Password Do Not Match",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/user",
        { name, email, password, pic },
        config
      );
      toast({
        title: "Registration Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });

      localStorage.setItem("userInfo", JSON.stringify(data));
      setPicLoading(false);
      history.push("/chat");
    } catch (e) {
      toast({
        title: "Error Occured",
        description: "Error Occured",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setPicLoading(false);
    }
  };

  const postDetails = (pics) => {
    setPicLoading(true);
    if (pics === undefined) {
      toast({
        title: "Please select an Image",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    console.log(pics);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "mern-chat");
      data.append("cloud_name", "weilianglee");
      fetch("https://api.cloudinary.com/v1_1/weilianglee/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          setPicLoading(false);
        })
        .catch((e) => {
          setPicLoading(false);
        });
    } else {
      toast({
        title: "Please Select Image",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setPicLoading(false);
      return;
    }
  };

  return (
    <VStack spacing='5px'>
      <FormControl id='first-name' isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder='Enter your Name'
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl id='email' isRequired>
        <FormLabel>Email Address</FormLabel>
        <Input
          type='email'
          placeholder='Enter your Email Address'
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id='password' isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size='md'>
          <Input
            type={show ? "text" : "password"}
            placeholder='Enter Password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' onClick={handleCLick}>
              {show ? "Hide" : "show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id='confirmPassword' isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup size='md'>
          <Input
            type={show ? "text" : "password"}
            placeholder='Confirm Password'
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' onClick={handleCLick}>
              {show ? "Hide" : "show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id='pic'>
        <FormLabel>Upload your Picture</FormLabel>
        <Input
          type='file'
          p={1.5}
          accept='image/*'
          onChange={(e) => postDetails(e.target.files[0])}
        />
      </FormControl>
      <Button
        colorScheme='blue'
        width='100%'
        color='white'
        style={{ marginTop: 15 }}
        onClick={submmitHandler}
        isLoading={picloading}
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default Signup;
