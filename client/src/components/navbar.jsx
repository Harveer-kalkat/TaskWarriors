import React from "react";
import {
  Flex,
  Box,
  Heading,
  Spacer,
  ButtonGroup,
  HStack,
  Button,
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box >
      <Flex
        as="navbar"
        bg="#7B70F6"
        // m="20px"
        mx="50px"
        p="20px"
        alignItems="center"
        wrap="wrap"
        boxShadow="md"
        borderRadius='20px'
      >
        <Heading as="h2" pl="50px">
          TaskWarriors
        </Heading>
        <Spacer />
        <HStack spacing="50px" pr="50px">
          <ButtonGroup variant="text" colorScheme="gray" spacing="8">
            {["Home", "Services", "Warriors", "Support"].map((item) => (
              <Button
                _hover={{
                  background: "#905BE8",
                  color: "black",
                }}
                key={item}
              >
                {item}
              </Button>
            ))}
          </ButtonGroup>
          <Button
            _hover={{
              background: "#905BE8",
              color: "black",
            }}
            variant="tertiary"
          >
            Login
          </Button>
          <Button color="black" colorScheme="purple">
            Sign Up
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
