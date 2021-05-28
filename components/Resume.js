import {
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { VStack, StackDivider } from "@chakra-ui/react";

const ResumePage = () => {
  return (
    <Flex w="100%" h="100%" direction="column">
      <Center>
        <Heading
          fontFamily="Share Tech Mono"
          fontSize="xl"
          pt={10}
          text-align="center"
        >
          Here are some of the skills and tools I have experience with:
        </Heading>
      </Center>
      <Center>
        <VStack>
          <Container pt={10} maxW="container.xl">
            <Text>
              Javascript - While I learned and starting using it only recently,
              I've really taken a liking to it. Its quite versatile for
              development and I've used it for both front-end and some back-end
              development. I've had the most fun using the Vue.js framework.
            </Text>
            <Text pt={2}>
              UI Tools - Over the past few months some of the most fun I've had
              is working with UI design. I've used Bootstrap and enjoyed the
              ease of use and the ability it gave me to make aesthetic UIs. For
              this site I've been using Chakra UI which I've thoroughly enjoyed
              using as well.
            </Text>
            <Text pt={2}>
              Other Languages - Over the course of my education at EKU, I gained
              experience in a myriad of languages. Java, HTML, Python, and even
              some work in C. Though my experience is limited in some langauges,
              I've found with time I can usually pick up on new ones with a
              couple of hours of work.
            </Text>
            <Text pt={2}>
              Database Tools - I've worked with both SQL and MongoDB. While I've
              worked more with SQL, MongoDB is easy to use and manage and I've
              enjoyed using it for the past few months.
            </Text>
            <Text pt={2}>
              Github and Git - Over the past year, I've become a lot more
              experienced in using Github to manage projects. This website is on
              Github and I plan to expand my repository library in the future as
              well.
            </Text>
          </Container>
        </VStack>
      </Center>
      <Center>
        <Text pt={4}>
          If you're interested in my work and are interested in working with me,
          you can download my resume{" "}
          <a href="/Allen Roberts Resume.doc" download="resume">
            <Button aria-label="download resume" size="sm" variant="outline">
              Here
            </Button>
          </a>
        </Text>
      </Center>
    </Flex>
  );
};

export default ResumePage;
