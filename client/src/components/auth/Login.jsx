import { React, useEffect, useState } from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  InputGroup,
  InputRightElement,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Form, Link, useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import { useAuthContext } from "../../hooks/useAuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login, isLoading, error } = useLogin();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    await login(email, password);
    if (user) {
      navigate("/");
    }
  };

  return (
    <Container
      maxW="lg"
      py={{ base: "12", md: "24" }}
      px={{ base: "0", sm: "8" }}
      bg="#7B70F6"
      mt="40px"
      borderRadius="2xl"
    >
      <Stack spacing="8">
        <Stack spacing="6">
          <HStack spacing="85" mt="-30">
            <Link to="/">
              <ArrowBackIcon boxSize={6} mt="0" alignItems="flex-start" />
            </Link>
            <Heading as="h2">TaskWarriors</Heading>
          </HStack>

          <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
            <Heading size={{ base: "xs", md: "sm" }}>
              Log in to your account
            </Heading>
            <HStack spacing="1" justify="center">
              <Text color="fg.muted">Don't have an account?</Text>
              <Link to="/Register">
                <Button variant="text" size="lg">
                  Sign up
                </Button>
              </Link>
            </HStack>
          </Stack>
        </Stack>
        <Box
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg="whiteAlpha.100"
          boxShadow={{ base: "none", sm: "md" }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Stack spacing="6">
            <Form onSubmit={handleSubmit}>
              <Stack spacing="5">
                <FormControl>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    id="email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <InputGroup>
                    <Input
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }
                      >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
              </Stack>
              <HStack justify="space-between">
                <Checkbox defaultChecked>Remember me</Checkbox>
                <Button variant="text" size="sm">
                  Forgot password?
                </Button>
              </HStack>
              <Stack spacing="6">
                {error && (
                  <FormControl isInvalid={error}>
                    <FormErrorMessage color="red.100">{error}</FormErrorMessage>
                  </FormControl>
                )}
                <Button
                  type="submit"
                  variant="primary"
                  disabled={isLoading}
                  bg="#905BE8"
                  _hover={{
                    background: "purple",
                    color: "black",
                  }}
                >
                  Sign in
                </Button>

                <HStack>
                  <Divider />
                  <Text
                    textStyle="sm"
                    whiteSpace="nowrap"
                    color="fg.muted"
                  ></Text>
                  <Divider />
                </HStack>
              </Stack>
            </Form>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default Login;
