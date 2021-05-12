import { Center, Flex, Heading} from "@chakra-ui/react";
import { UnorderedList, ListItem } from "@chakra-ui/react"

const FrontPage = () => {
  return (
    <Flex
      w="100%"
      h="100%"
      direction="column"
      
    >
      <Center>
       <Heading fontFamily="Share Tech Mono" color = "#00b3ff" fontSize={["xl", "2xl", "3xl", "4xl" ]} noOfLines={2} pt={10}>
        I'm Allen Roberts, welcome to my site!
    </Heading>
    </Center>
    <Center>
    
    <Heading color = "#00b3ff" fontSize={["xl", "2xl" ]} noOfLines={2} pt={10}>
        Here are a few things about me:
    </Heading>
  </Center>
  <Center>
    <UnorderedList color= "#00b3ff">
  <ListItem fontSize={["sm", "md", "lg", "xl"]} pt={10} >I'm a graduate from EKU with a bachelor's in Computer Science (2021).</ListItem>
  <ListItem fontSize={["sm", "md", "lg", "xl"]} pt={10} >I'm developing this website as a way to further develop my programming capabilities.</ListItem>
  <ListItem fontSize={["sm", "md", "lg", "xl"]} pt={10} >In my free time I'm usually hiking, reading, or playing video games.</ListItem>
  </UnorderedList>
  </Center>
    </Flex>
    
  );
};


export default FrontPage;