import {
  Heading,
  Avatar,
  Center,
  Stack,
  Button,
  useColorModeValue,
  Box,
  SimpleGrid,
  Text,
  Image,
} from "@chakra-ui/react";
import { React, useState } from "react";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";

const HomeCards = () => {
  const services = [
    {
      name: "Programming and Development",
      image: require("../images/programming.jpg"),
      field: "Programming_and_Development",
    },
    {
      name: "Electronics",
      image: require("../images/electronics.jpg"),
      field: "Electronics",
    },
    {
      name: "Project Management",
      image: require("../images/project-manager.png"),
      field: "Project_Management",
    },
    {
      name: "HealthCare",
      image: require("../images/healthcare.png"),
      field: "HealthCare",
    },
    {
      name: "Assembling",
      image: require("../images/assembling.jpg"),
      field: "Assembling",
    },
    {
      name: "Hair and Beauty",
      image: require("../images/hairandbeauty.png"),
      field: "Hair_and_Beauty",
    },
  ];
  return (
    <Box m="5px" p="5px" mx="250px">
      <Box mt="80px" mb="50px">
        <Text
          as="a"
          color="white"
          borderBottom="1px solid white"
          paddingBottom="5px"
          fontSize={"lg"}
        >
          Popular Services
        </Text>
      </Box>
      <Box>
        <SimpleGrid columns={3} spacing={10}>
          {services.map((service) => (
            <Link to={`/ServiceDetails/${service.field}`}>
              <Box bg="white" height="200px" rounded={"lg"}>
                <Image
                  fit="contain"
                  height="200px"
                  width="600px"
                  src={service.image}
                  alt="Services"
                />
                <Text color="blackAlpha" fontWeight="bold" fontSize={"lg"}>
                  {service.name}
                </Text>
              </Box>
            </Link>
          ))}
        </SimpleGrid>
      </Box>
      <Box mt="80px" mb="50px">
        <Text
          as="a"
          color="white"
          borderBottom="1px solid white"
          paddingBottom="5px"
          fontSize={"lg"}
        >
          Proud Warriors
        </Text>
      </Box>
      <Box>
        <SimpleGrid columns={3} spacing={10}>
          <Center py={6}>
            <Box
              maxW={"320px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.900")}
              boxShadow={"2xl"}
              rounded={"lg"}
              p={6}
              textAlign={"center"}
            >
              <Avatar
                size={"xl"}
                src={
                  "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                }
                alt={"Avatar Alt"}
                mb={4}
                pos={"relative"}
                _after={{
                  content: '""',
                  w: 4,
                  h: 4,
                  bg: "green.300",
                  border: "2px solid white",
                  rounded: "full",
                  pos: "absolute",
                  bottom: 0,
                  right: 3,
                }}
              />
              <Heading fontSize={"2xl"} fontFamily={"body"}>
                Lindsey James
              </Heading>
              <Text fontWeight={600} color={"gray.500"} mb={4}>
                @lindsey_jam3s
              </Text>
              <Text
                textAlign={"center"}
                color={useColorModeValue("gray.700", "gray.400")}
                px={3}
              >
                Punctual, Focus on perfection, and organized. PM for work
                inquires
              </Text>

              <Stack
                align={"center"}
                justify={"center"}
                direction={"row"}
                mt={6}
              >
                <StarRating rating={5} />
              </Stack>

              <Stack mt={8} direction={"row"} spacing={4}>
                <Button
                  flex={1}
                  fontSize={"sm"}
                  rounded={"full"}
                  _focus={{
                    bg: "gray.200",
                  }}
                >
                  Message
                </Button>
                <Button
                  flex={1}
                  fontSize={"sm"}
                  rounded={"full"}
                  bg={"blue.400"}
                  color={"white"}
                  boxShadow={
                    "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                  }
                  _hover={{
                    bg: "blue.500",
                  }}
                  _focus={{
                    bg: "blue.500",
                  }}
                >
                  Follow
                </Button>
              </Stack>
            </Box>
          </Center>
          <Center py={6}>
            <Box
              maxW={"320px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.900")}
              boxShadow={"2xl"}
              rounded={"lg"}
              p={6}
              textAlign={"center"}
            >
              <Avatar
                size={"xl"}
                src={require("../images/david.jpg")}
                alt={"Avatar Alt"}
                mb={4}
                pos={"relative"}
                _after={{
                  content: '""',
                  w: 4,
                  h: 4,
                  bg: "green.300",
                  border: "2px solid white",
                  rounded: "full",
                  pos: "absolute",
                  bottom: 0,
                  right: 3,
                }}
              />
              <Heading fontSize={"2xl"} fontFamily={"body"}>
                David Row
              </Heading>
              <Text fontWeight={600} color={"gray.500"} mb={4}>
                david667@gmail.com
              </Text>
              <Text
                textAlign={"center"}
                color={useColorModeValue("gray.700", "gray.400")}
                px={3}
              >
                Experienced, with 25 projects on github. Can create perfect
                website to boost your buisness. PM for work inquires
              </Text>

              <Stack
                align={"center"}
                justify={"center"}
                direction={"row"}
                mt={6}
              >
                <StarRating rating={4} />
              </Stack>

              <Stack mt={8} direction={"row"} spacing={4}>
                <Button
                  flex={1}
                  fontSize={"sm"}
                  rounded={"full"}
                  _focus={{
                    bg: "gray.200",
                  }}
                >
                  Message
                </Button>
                <Button
                  flex={1}
                  fontSize={"sm"}
                  rounded={"full"}
                  bg={"blue.400"}
                  color={"white"}
                  boxShadow={
                    "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                  }
                  _hover={{
                    bg: "blue.500",
                  }}
                  _focus={{
                    bg: "blue.500",
                  }}
                >
                  Follow
                </Button>
              </Stack>
            </Box>
          </Center>
          <Center py={6}>
            <Box
              maxW={"320px"}
              w={"full"}
              bg={useColorModeValue("white", "gray.900")}
              boxShadow={"2xl"}
              rounded={"lg"}
              p={6}
              textAlign={"center"}
            >
              <Avatar
                size={"xl"}
                src={require("../images/slee.jpg")}
                alt={"Avatar Alt"}
                mb={4}
                pos={"relative"}
                _after={{
                  content: '""',
                  w: 4,
                  h: 4,
                  bg: "green.300",
                  border: "2px solid white",
                  rounded: "full",
                  pos: "absolute",
                  bottom: 0,
                  right: 3,
                }}
              />
              <Heading fontSize={"2xl"} fontFamily={"body"}>
                Sophie Lee
              </Heading>
              <Text fontWeight={600} color={"gray.500"} mb={4}>
                s12lee@gmail.com
              </Text>
              <Text
                textAlign={"center"}
                color={useColorModeValue("gray.700", "gray.400")}
                px={3}
              >
                Professional, organized and trustworthy nursing student. PM for
                work inquires
              </Text>

              <Stack
                align={"center"}
                justify={"center"}
                direction={"row"}
                mt={6}
              >
                <StarRating rating={5} />
              </Stack>

              <Stack mt={8} direction={"row"} spacing={4}>
                <Button
                  flex={1}
                  fontSize={"sm"}
                  rounded={"full"}
                  _focus={{
                    bg: "gray.200",
                  }}
                >
                  Message
                </Button>
                <Button
                  flex={1}
                  fontSize={"sm"}
                  rounded={"full"}
                  bg={"blue.400"}
                  color={"white"}
                  boxShadow={
                    "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                  }
                  _hover={{
                    bg: "blue.500",
                  }}
                  _focus={{
                    bg: "blue.500",
                  }}
                >
                  Follow
                </Button>
              </Stack>
            </Box>
          </Center>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default HomeCards;
