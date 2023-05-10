import React, { useState } from "react";
import { Box, Text } from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/tooltip";
import { Button } from "@chakra-ui/button";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/menu";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/modal";
import { Avatar } from "@chakra-ui/avatar";
import { ChatState } from "../../Context/ChatProvider";
import ProfileModel from "./ProfileModel";
import { useHistory } from "react-router-dom/";
import { useDisclosure } from "@chakra-ui/react";
import ChatLoading from "../Chatloading";
import axios from "axios";
import UserListItem from "../UserAvatar/UserListItem";
import { useToast } from "@chakra-ui/toast";
import { Spinner } from "@chakra-ui/spinner";
import { Input } from "@chakra-ui/input";

const SideDrawer = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);

  const { user, setSelectedChat, chats, setChats } = ChatState();
  const history = useHistory();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    history.push("/");
  };

  const toast = useToast();

  const accessChat = async (userId) => {
    try {
      setLoading(true);

      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.post("/api/chat", { userId }, config);

      if (!chats.find((c) => c._id === data._id)) setChats([data, ...chats]);
      //already existing check clause //newly created chat above the rest

      setSelectedChat(data);
      setLoadingChat(false);
      onClose();
    } catch (error) {
      toast({
        title: "Error Fetching the chat",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  const handleSearch = () => {};

  return (
    <>
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        bg='white'
        p='5px 10px 5px 10px'
        borderWidth='5px'
      >
        <Tooltip label='Search Users to chat' hasArrow placement='bottom-end'>
          <Button variant='ghost' onClick={onOpen}>
            <i className='fas fa-search'></i>
            <Text display={{ base: "none", md: "flex" }} px={4}>
              Search User
            </Text>
          </Button>
        </Tooltip>
        <Text fontSize='2xl' fontFamily='Work sans'>
          Mern Chat
        </Text>
        <Menu>
          <MenuButton p={1}>
            <BellIcon fontSize='2xl' m={1} />
          </MenuButton>
          {/* <MenuList></MenuList> */}
        </Menu>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            <Avatar
              size='sm'
              cursor='pointer'
              name={user.name}
              src={user.pic}
            />
          </MenuButton>
          <MenuList>
            <ProfileModel user={user}>
              <MenuItem
                fontWeight='bold'
                color='black'
                _hover={{ background: "#4A5568" }}
              >
                My Profile
              </MenuItem>
            </ProfileModel>
            <MenuDivider />
            <MenuItem fontWeight='bold' color='black' onClick={logoutHandler}>
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Drawer
        placement='left'
        onClose={() => {
          setSearch("");
          onClose();
        }}
        isOpen={isOpen}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Search Users</DrawerHeader>
          <DrawerBody>
            <Box display='flex' pb={2}>
              <Input
                placeholder='Search By Name and Email'
                mr={2}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button onClick={handleSearch}>Go</Button>
            </Box>
            {loading ? (
              <ChatLoading />
            ) : (
              searchResult?.map((user) => (
                <UserListItem
                  key={user._id}
                  user={user}
                  handleFunction={() => accessChat(user._id)}
                />
              ))
            )}
            {loadingChat && <Spinner ml='auto' display='flex' />}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SideDrawer;
