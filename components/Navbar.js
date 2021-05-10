import { Box, Button, Center, Flex, Heading, IconButton, Spacer, StackDivider, Text, VStack } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider, } 
  from "@chakra-ui/react";
  import { HamburgerIcon } from '@chakra-ui/icons'

const Navbar = ({}) => {
  return (
    <Flex
      w="100%"
      h="100%"
      direction="row"
      boxShadow="0 3rem 5rem rgba(0, 0, 0, 0.25)"
      bg='blue.400'
    >
    <Heading fontSize="5xl" noOfLines={2}>
    
    </Heading>
      <Spacer></ Spacer>
    </Flex>
  );
};

export default Navbar;
