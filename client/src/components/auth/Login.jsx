import React from "react";
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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container
      maxW="lg"
      py={{ base: "12", md: "24" }}
      px={{ base: "0", sm: "8" }}
      bg="#905BE8"
      mt="40px"
      borderRadius="2xl"
    >
      <Stack spacing="8">
        <Stack spacing="6">
          <Heading as="h2">TaskWarriors</Heading>
          <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
            <Heading size={{ base: "xs", md: "sm" }}>
              Log in to your account
            </Heading>
            <HStack spacing="1" justify="center">
              <Text color="fg.muted">Don't have an account?</Text>
              <Link to="/SignUp">
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
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input id="email" type="email" />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  id="password"
                  name="password"
                  type={"password"}
                  autoComplete="current-password"
                  required
                />
              </FormControl>
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultChecked>Remember me</Checkbox>
              <Button variant="text" size="sm">
                Forgot password?
              </Button>
            </HStack>
            <Stack spacing="6">
              <Button variant="primary">Sign in</Button>
              <HStack>
                <Divider />
                <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
                  or continue with
                </Text>
                <Divider />
              </HStack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default Login;
