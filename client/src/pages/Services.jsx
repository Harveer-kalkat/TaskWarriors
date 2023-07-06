import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Box, Container, SimpleGrid, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>
      <Box bg="#7B70F6" h="auto" my="0px">
        <Container pt="150px" width={"200px"} position={"relative"}>
          <Text
            as="p"
            color="blackAlpha"
            fontWeight="bold"
            fontSize={"lg"}
            borderBottom="2px solid black"
          >
            Services we Offer.
          </Text>
        </Container>

        <Box px="200px" py="100px">
          <SimpleGrid columns={3} spacing={20}>
            <Link to={"/ServiceDetails"}>
              <Box bg="white" height="200px" rounded={"lg"}>
                Programming and Development
              </Box>
            </Link>
            <Box bg="white" height="200px" rounded={"lg"}>
              Electronics
            </Box>
            <Box bg="white" height="200px" rounded={"lg"}>
              Project Management
            </Box>
            <Box bg="white" height="200px" rounded={"lg"}>
              HealthCare
            </Box>
            <Box bg="white" height="200px" rounded={"lg"}>
              Assembling
            </Box>
            <Box bg="white" height="200px" rounded={"lg"}>
              Hair and Beauty
            </Box>
            <Box bg="white" height="200px" rounded={"lg"}></Box>
            <Box bg="white" height="200px" rounded={"lg"}></Box>
            <Box bg="white" height="200px" rounded={"lg"}></Box>
          </SimpleGrid>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default Services;
