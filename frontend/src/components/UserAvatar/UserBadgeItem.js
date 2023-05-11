import { CloseIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/layout";
import React from "react";

const UserBadgeItem = ({ user, handleFunction, selectedChat }) => {
  const isAdmin =
    selectedChat &&
    selectedChat.groupAdmin &&
    user._id === selectedChat.groupAdmin._id;
  const backgroundColor = isAdmin ? "#3182CE" : "#38B2AC";
  return (
    <Box
      px={2}
      py={1}
      borderRadius='lg'
      m={1}
      mb={2}
      variant='solid'
      fontSize={12}
      backgroundColor={backgroundColor}
      color='white'
      cursor='pointer'
      onClick={handleFunction}
    >
      {user.name}
      <CloseIcon pl={1} />
    </Box>
  );
};

export default UserBadgeItem;
