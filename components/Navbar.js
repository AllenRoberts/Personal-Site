import { Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import {HStack} from "@chakra-ui/react"
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter()
  return (
    <Flex
      w="100%"
      h="100%"
      direction="column"
      bg='black.300'
    >
      <Center>
      <HStack spacing="24px">
  <Button 
  colorScheme="teal" 
  variant="solid" 
  onClick={() => router.push('/projects')}
  >
    Projects
  </Button>
  <Button 
  colorScheme="teal" 
  variant="solid" 
  href="../resume.js" 
  onClick={() => router.push('/resume')}
  >
    Resume 
  </Button>
  <Button 
  colorScheme="teal" 
  variant="solid" 
  href="../about.js" 
  onClick={() => router.push('/about')}
  >
    About 
  </Button>
  
</HStack>
    
    </Center>
    </Flex>
    
  );
};


export default Navbar;