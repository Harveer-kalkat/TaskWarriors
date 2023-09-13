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
  Select,
  FormErrorMessage,
  Textarea,
} from "@chakra-ui/react";
import { Form, Link, useNavigate } from "react-router-dom";
import { useListingsContext } from "../hooks/useListingContext";

const CreateListings = () => {
  const { dispatch } = useListingsContext();

  const [profilePic, setProfilePic] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [price, setPrice] = useState("");
  const [field, setField] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("profilePic", profilePic);
    formData.append("profilePicName", profilePic.name);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("field", field);
    formData.append("price", price);
    formData.append("description", description);

    const response = await fetch(
      "https://taskwarriors-backend.onrender.com/api/listing/CreateListings",
      {
        method: "POST",
        body: formData,
      }
    ).catch((error) => {
      console.error("Error: ", error);
    });

    const json = await response.json();
    console.log(json);
    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setEmptyFields([]);
      setError(null);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPrice("");
      setField("");
      setDescription("");
      // dispatch({ type: "CREATE_LISTING", payload: json });
    }
  };

  return (
    <Box bg={"whiteAlpha.900"}>
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={4} w={"full"} maxW={"md"}>
            <HStack spacing="70" pb="30px">
              <Link to="/">
                <ArrowBackIcon boxSize={6} mt="0" alignItems="flex-start" />
              </Link>
              <Heading as="h2">Add a new listing</Heading>
            </HStack>
            <Form
              action="/CreateListings"
              onSubmit={handleSubmit}
              encType="multipart/form-data"
            >
              <Box>
                <FormControl id="profilePic" isRequired>
                  <FormLabel for="profilePic">Profile Pic</FormLabel>
                  <Input
                    type="file"
                    id="profilePic"
                    name="profilePic"
                    accept="image/*"
                    border="0"
                    onChange={(e) => setProfilePic(e.target.files[0])}
                  />
                </FormControl>
              </Box>
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
              <FormControl id="price" isRequired>
                <FormLabel>Price</FormLabel>
                <Input
                  type="phone"
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                />
              </FormControl>
              <Stack spacing={6}>
                <FormControl id="field" isRequired>
                  <FormLabel>Field</FormLabel>
                  <Select
                    placeholder="Select option"
                    id="field"
                    onChange={(e) => setField(e.target.value)}
                    value={field}
                  >
                    <option value="Web_Development">Web Development</option>
                    <option value="CyberSecurity">CyberSecurity</option>
                    <option value="Software_Development">
                      Software Development
                    </option>
                    <option value="Senior_support_worker">
                      Senior support worker
                    </option>
                    <option value="Project_Assistant">Project Assistant</option>
                    <option value="Electrical_Technician">
                      Electrical Technician
                    </option>
                  </Select>
                </FormControl>
                <FormControl id="description">
                  <FormLabel>Description</FormLabel>
                  <Textarea
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    type="textarea"
                  />
                </FormControl>

                {error && (
                  <FormControl isInvalid={error}>
                    <FormErrorMessage color="red.100">{error}</FormErrorMessage>
                  </FormControl>
                )}

                <Button
                  type="submit"
                  colorScheme={"blue"}
                  variant={"solid"}
                  // disabled={isLoading}
                >
                  Create
                </Button>
              </Stack>
            </Form>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={"Listing Image"}
            objectFit={"cover"}
            src={require("../images/listing.jpg")}
          />
        </Flex>
      </Stack>
    </Box>
  );
};

export default CreateListings;
