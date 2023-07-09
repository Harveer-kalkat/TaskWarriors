import React from "react";
import Navbar from "../components/navbar";
import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="navbar">
        <Navbar />
      </div>
      <Box bg="#7B70F6" h="745" mx="160px" my="0px">
        <Box pt={"180px"}>
          <article>
            <div className="profile-photo"></div>
            <div className="profile-info">
              <h1>Nick Lewis</h1>
              <p>
                Creative technologist{" "}
                <a href="http://fiascodesign.co.uk/">@FiascoDesign</a>. Maker of
                web things. Joint owner{" "}
                <a href="http://mountainandco.uk/">@mountainandco</a>.
              </p>
            </div>
          </article>
          <Link to="">
            <Button color="black" bg={"purple.600"}>
              Create new Listing
            </Button>
          </Link>
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;
