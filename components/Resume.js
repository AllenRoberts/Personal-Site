import { Box, Center, Flex, Heading, Text} from "@chakra-ui/react";
import {VStack, StackDivider } from "@chakra-ui/react"

const ResumePage = () => {
  return (
    <Flex
      w="100%"
      h="max-content"
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Center>
       <Heading color = "#00b3ff" fontSize="4xl"  pt={10} text-align = "center">
        Here's are some projects I've worked on:
    </Heading>
    </Center>
    <Center>
    <VStack
  divider={<StackDivider borderColor="#00b3ff" />}
  spacing={4}
  align="stretch"
>
  <Box >
  <Heading color = "#00b3ff" fontSize="4xl"  pt={10}>
        This Site (2021-)
    </Heading>
    <Text color = "#00b3ff">I will be actively working on this site to further help me develop my React and UI design skills. I will add more complex features as my skills and experience grow.</Text>
  </Box>
  <Box >
  <Heading color = "#00b3ff" fontSize="4xl"  pt={10}>
        WIP
    </Heading>

  </Box>
 
  </VStack>
</Center>
    </Flex>
    
  );
};


export default ResumePage;