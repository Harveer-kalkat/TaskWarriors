import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Box, Container, SimpleGrid, Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      name: "Programming and Development",
      image: require("../images/programming.jpg"),
    },
    { name: "Electronics", image: require("../images/electronics.jpg") },
    {
      name: "Project Management",
      image: require("../images/project-manager.png"),
    },
    { name: "HealthCare", image: require("../images/healthcare.png") },
    { name: "Assembling", image: require("../images/assembling.jpg") },
    { name: "Hair and Beauty", image: require("../images/hairandbeauty.png") },
  ];
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
            {services.map((service) => (
              <Link to={"/ServiceDetails"}>
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
      </Box>
      <Footer />
    </div>
  );
};

export default Services;
