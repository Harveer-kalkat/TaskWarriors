import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

const ServiceDetails = () => {
  const ServiceDetails = [
    {
      title: "Service Title",
      price: "Service Price",
      description: "Description",
      content: "Content",
    },
    {
      title: "Service Title",
      price: "Service Price",
      description: "Description",
      content: "Content",
    },
    {
      title: "Service Title",
      price: "Service Price",
      description: "Description",
      content: "Content",
    },
  ];
  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>
      <Box>
        {ServiceDetails.map((detail) => (
          <Box className="services" bg="#7B70F6" rounded={"lg"}>
            <div className="details">
              <div className="big-img">
                <img src="" alt="" />
              </div>

              <div className="box">
                <div className="row">
                  <h2>{detail.title}</h2>
                  <span>${detail.price}</span>
                </div>

                <p>{detail.description}</p>
                <p>{detail.content}</p>
                <Link to="/WarriorSelection">
                  <button className="cart">Book</button>
                </Link>
              </div>
            </div>
          </Box>
        ))}

        <Footer />
      </Box>
    </div>
  );
};

export default ServiceDetails;
