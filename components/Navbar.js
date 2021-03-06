import { Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <Flex w="100%" h="100%" direction="column" bg="black">
      <Center>
        <HStack spacing="50px">
          <Button
            color="#00b3ff"
            variant="outline"
            size="md"
            onClick={() => router.push("/projects")}
          >
            <Text fontSize={["sm", "md", "lg", "xl"]}>Projects</Text>
          </Button>
          <Button
            color="#00b3ff"
            variant="outline"
            size="md"
            onClick={() => router.push("/resume")}
          >
            <Text fontSize={["sm", "md", "lg", "xl"]}>Resume & Skills</Text>
          </Button>
          <Button
            color="#00b3ff"
            variant="outline"
            size="md"
            onClick={() => router.push("/")}
          >
            <Text fontSize={["sm", "md", "lg", "xl"]}>Home</Text>
          </Button>
        </HStack>
      </Center>
    </Flex>
  );
};

export default Navbar;
