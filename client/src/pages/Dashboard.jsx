import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { Box, Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Dashboard = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    async function getUser() {
      const response = await fetch(
        `https://taskwarriors-backend.onrender.com/api/user/Dashboard/${id}`
      );

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setUserData(records);
    }

    getUser();
    console.log(userData);
    return;
  }, [userData.length, id]);

  return (
    <div className="dashboard">
      <div className="navbar">
        <Navbar />
      </div>
      <Box bg="#7B70F6" h="745" mx="160px" my="0px">
        <Box pt={"180px"}>
          <article>
            {userData.map((data) => {
              return (
                <div>
                  <Box>
                    <Image
                      className="profile-photo"
                      src={`/images/${data.profilePic}`}
                      alt="profilePic"
                    />
                  </Box>
                  <div className="profile-info">
                    <h1>
                      {data.firstName} {data.lastName}
                    </h1>
                    <p>{data.email}</p>
                  </div>
                  {data.role === "Warrior" && (
                    <Link to="/CreateListings">
                      <Button color="black" bg={"purple.600"}>
                        Create new Listing
                      </Button>
                    </Link>
                  )}
                </div>
              );
            })}
          </article>
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;
