import { Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import { Stack, HStack, VStack } from "@chakra-ui/react"

const FrontPage = () => {
  return (
    <Flex
      w="100%"
      h="100%"
      direction="column"
      
    >
      <Center>
       <Heading color = "#00b3ff" fontSize="5xl" noOfLines={2} pt={100} text-align = "center">
        I'm Allen Roberts, welcome to my site!
    </Heading>
    
    </Center>
    </Flex>
    
  );
};


export default FrontPage;