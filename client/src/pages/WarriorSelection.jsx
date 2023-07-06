import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Container, Flex, HStack, Image } from "@chakra-ui/react";

const WarriorSelection = () => {
  const [warriors, setWarriors] = useState([]);
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(
        "http://localhost:4000/api/user/WarriorSelection"
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
  }, [warriors.length]);
  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>

      {warriors.map((warrior) => {
        return (
          <Container my="100px">
            <div class="card" style={{ width: 740 }}>
              <div class="row">
                <div class="img">
                  <Image
                    src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
                    class="card-img"
                    alt="..."
                  />
                </div>
                <div class="text">
                  <div class="card-body">
                    <Flex px="60px" py="30px">
                      <HStack spacing="180px">
                        <h5 class="card-title">
                          {warrior.firstName + " " + warrior.lastName}
                        </h5>

                        <p class="card-text">Price</p>
                      </HStack>
                    </Flex>
                    <p class="card-text">Description</p>
                    <p class="card-text">{warrior.email}</p>
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
