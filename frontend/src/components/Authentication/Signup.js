import { Button } from "@chakra-ui/button";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { VStack } from "@chakra-ui/layout";
import React, { useState } from "react";

const Signup = () => {
  const [show, setShow] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [confirmpassword, setConfirmPassword] = useState();
  const [password, setPassword] = useState();
  const [pic, setPic] = useState();

  const handleCLick = () => setShow(!show);

  const postDetails = (pics) => {};

  const submmitHandler = () => {};

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
      >
        Sign Up
      </Button>
    </VStack>
  );
};

export default Signup;
