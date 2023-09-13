import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Container, Flex, HStack, Image, Text, Button } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const WarriorSelection = () => {
  const { id } = useParams();
  const [warriors, setWarriors] = useState([]);
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(
        `http://localhost:4000/api/listing/WarriorSelection/${id}`
      );

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setWarriors(records);
    }

    getRecords();

    return;
  }, [warriors.length, id]);
  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>

      {warriors.map((warrior) => {
        return (
          <Container my="100px">
            <div className="card" style={{ width: 740, bg: "#7B70F6" }}>
              <div className="row">
                <div className="img">
                  <Image
                    src={`/images/${warrior.profilePicName}`}
                    className="card-img"
                    alt="..."
                  />
                </div>
                <div className="text">
                  <div className="card-body" bg="#7B70F6">
                    <Flex px="60px" py="30px">
                      <HStack spacing="180px">
                        <Text
                          className="card-title"
                          fontWeight="bold"
                          fontSize="30px"
                        >
                          {warrior.firstName + " " + warrior.lastName}
                        </Text>

                        <Text as="p" className="card-text" color="red.200">
                          ${warrior.price}/hr
                        </Text>
                      </HStack>
                    </Flex>
                    <Text className="card-text">{warrior.description}</Text>
                    <Text
                      className="card-text"
                      fontSize="20px"
                      color="gray.100"
                      mt="10px"
                    >
                      {warrior.email}
                    </Text>
                    <Button className="cart" mt="40px">
                      Payment
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        );
      })}

      <Footer />
    </div>
  );
};

export default WarriorSelection;
