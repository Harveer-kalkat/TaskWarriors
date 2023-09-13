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
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };
  return (
    <Box>
      <Flex
        as="navbar"
        bg="#7B70F6"
        // m="20px"
        mx="50px"
        p="20px"
        alignItems="center"
        wrap="wrap"
        boxShadow="md"
        borderRadius="20px"
      >
        <Heading as="h2" pl="50px">
          TaskWarriors
        </Heading>
        <Spacer />
        <HStack spacing="50px" pr="50px">
          <ButtonGroup variant="text" colorScheme="gray" spacing="8">
            <Link to="/">
              <Button
                _hover={{
                  background: "#905BE8",
                  color: "black",
                }}
                key="Home"
              >
                Home
              </Button>
            </Link>
            <Link to="/Services">
              <Button
                _hover={{
                  background: "#905BE8",
                  color: "black",
                }}
                key="Services"
              >
                Services
              </Button>
            </Link>
            {user && (
              <Link to={`/Chat`}>
                <Button
                  _hover={{
                    background: "#905BE8",
                    color: "black",
                  }}
                  key="Chat"
                >
                  Chat
                </Button>
              </Link>
            )}
            {user && (
              <Box>
                <Button
                  _hover={{
                    background: "#905BE8",
                    color: "black",
                  }}
                  key="Logout"
                  onClick={handleClick}
                >
                  Logout
                </Button>
                <Link to={`/Dashboard/${user.email}`}>
                  <Button color="black" bg={"purple.600"}>
                    Dashboard
                  </Button>
                </Link>
              </Box>
            )}
            {!user && (
              <HStack>
                <Link to="/Login">
                  <Button
                    _hover={{
                      background: "#905BE8",
                      color: "black",
                    }}
                    key="Login"
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/SignUp">
                  <Button color="black" bg={"purple.600"}>
                    Become a Warrior
                  </Button>
                </Link>
              </HStack>
            )}
          </ButtonGroup>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
