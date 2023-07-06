import React from "react";
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
  Select,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Register = () => {
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
          <HStack>
            <Box>
              <FormControl id="firstName" isRequired>
                <FormLabel>First Name</FormLabel>
                <Input type="text" />
              </FormControl>
            </Box>
            <Box>
              <FormControl id="lastName" isRequired>
                <FormLabel>Last Name</FormLabel>
                <Input type="text" />
              </FormControl>
            </Box>
          </HStack>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" />
            <FormLabel>Confirm Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <FormControl id="phone" isRequired>
            <FormLabel>Phone Number</FormLabel>
            <Input type="phone" />
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
          <FormControl id="field" isRequired>
            <FormLabel>Field</FormLabel>
            <Select placeholder="Select option">
              <option value="Programming and development">
                Programming and development
              </option>
              <option value="Electronics">Electronics</option>
              <option value="Hair and Beauty">Hair and Beauty</option>
            </Select>
          </FormControl>
          <Stack spacing={6}>
            <Button colorScheme={"blue"} variant={"solid"}>
              Sign in
            </Button>
          </Stack>
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
