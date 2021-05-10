import { Button, Center, Flex, Heading, Text } from "@chakra-ui/react";

const FrontPage = () => {
  return (
    <Flex
      w="100%"
      h="100%"
      direction="column"
      bg='black.300'
    >
       <Heading fontSize="5xl" noOfLines={2}>
        I'm Allen Roberts, welcome to my site!
    </Heading>
    </Flex>
  );
};


export default FrontPage;