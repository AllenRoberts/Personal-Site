import { Button, Center, Flex, Heading, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <Flex
      w="100%"
      h="100%"
      direction="column"
      boxShadow="0 3rem 5rem rgba(0, 0, 0, 0.25)"
      bg='black.300'
    >
       <Heading fontSize="5xl" noOfLines={2}>
        I'm Allen Roberts, welcome to my site!
    </Heading>
    </Flex>
  );
};


export default Home;