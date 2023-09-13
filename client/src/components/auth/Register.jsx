import { React, useEffect, useState } from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  HStack,
  Box,
  FormErrorMessage,
  Checkbox,
} from "@chakra-ui/react";
import { Link, Form, useNavigate } from "react-router-dom";
import { useRegister } from "../../hooks/useRegister";
import { useAuthContext } from "../../hooks/useAuthContext";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { register, isLoading, error } = useRegister();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(firstName, lastName, email, password, phoneNumber);
  };

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <HStack spacing="10" pb="30px">
            <Link to="/">
              <ArrowBackIcon boxSize={6} mt="0" alignItems="flex-start" />
            </Link>
            <Heading as="h2">Create your account</Heading>
          </HStack>
          <Form onSubmit={handleSubmit} encType="multipart/form-data">
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
            <FormControl id="phone" isRequired>
              <FormLabel>Phone Number</FormLabel>
              <Input
                type="phone"
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
              />
            </FormControl>
            {/* <FormControl id="image" isRequired>
            <FormLabel for="photo">Upload your student ID!</FormLabel>
            <Input
              type="file"
              id="studentID"
              name="studentID"
              accept="image/*"
              border="0"
            />
          </FormControl> */}

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
                Sign up
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

export default Register;
