import { React, useEffect, useState } from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  HStack,
  Box,
  Select,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Form, Link, useNavigate } from "react-router-dom";
import { useSignup } from "../../hooks/useSignup";
import { useAuthContext } from "../../hooks/useAuthContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [field, setField] = useState("");
  const { signup, isLoading, error } = useSignup();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(firstName, lastName, email, password, phoneNumber, field);
  };

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <HStack spacing="120" pb="30px">
            <Link to="/">
              <ArrowBackIcon boxSize={6} mt="0" alignItems="flex-start" />
            </Link>
            <Heading as="h2">Register</Heading>
          </HStack>
          <Form onSubmit={handleSubmit}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    type="text"
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName" isRequired>
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type="text"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <FormLabel>Confirm Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <FormControl id="phoneNumber" isRequired>
              <FormLabel>Phone Number</FormLabel>
              <Input
                type="phone"
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
              />
            </FormControl>
            <FormControl id="field" isRequired>
              <FormLabel>Field</FormLabel>
              <Select
                placeholder="Select option"
                id="field"
                onChange={(e) => setField(e.target.value)}
                value={field}
              >
                <option value="Programming and development">
                  Programming and development
                </option>
                <option value="Electronics">Electronics</option>
                <option value="Hair and Beauty">Hair and Beauty</option>
              </Select>
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.500"}>Forgot password?</Link>
              </Stack>
              {error && (
                <FormControl isInvalid={error}>
                  <FormErrorMessage color="red.100">{error}</FormErrorMessage>
                </FormControl>
              )}
              <Button
                type="submit"
                colorScheme={"blue"}
                variant={"solid"}
                disabled={isLoading}
              >
                Sign Up
              </Button>
            </Stack>
          </Form>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          }
        />
      </Flex>
    </Stack>
  );
};

export default SignUp;
