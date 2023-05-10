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

const SideDrawer = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);

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
          <Button variant='ghost'>
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
      </Box>
    </>
  );
};

export default SideDrawer;
