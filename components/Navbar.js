import { Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import {HStack} from "@chakra-ui/react"

const Navbar = () => {
  return (
    <Flex
      w="100%"
      h="100%"
      direction="column"
      bg='black.300'
    >
      <Center>
      <HStack spacing="24px">
  <Button colorScheme="teal" variant="solid">
    Projects
  </Button>
  <Button colorScheme="teal" variant="solid">
    Resume
  </Button>
  <Button colorScheme="teal" variant="solid">
    About
  </Button>
  
</HStack>
    
    </Center>
    </Flex>
    
  );
};


export default Navbar;