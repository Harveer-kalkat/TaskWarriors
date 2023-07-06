import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

const ServiceDetails = () => {
  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>
      <Box>
        <div className="services">
          <div className="details">
            <div className="big-img">
              <img src="" alt="" />
            </div>

            <div className="box">
              <div className="row">
                <h2>Service Title</h2>
                <span>$Service Price</span>
              </div>

              <p>Description</p>
              <p>content</p>
              <Link to="/WarriorSelection">
                <button className="cart">Book</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="services">
          <div className="details">
            <div className="big-img">
              <img src="" alt="" />
            </div>

            <div className="box">
              <div className="row">
                <h2>Service Title</h2>
                <span>$Service Price</span>
              </div>

              <p>Description</p>
              <p>content</p>
              <button className="cart">Book</button>
            </div>
          </div>
        </div>
        <div className="services">
          <div className="details">
            <div className="big-img">
              <img src="" alt="" />
            </div>

            <div className="box">
              <div className="row">
                <h2>Service Title</h2>
                <span>$Service Price</span>
              </div>

              <p>Description</p>
              <p>content</p>
              <button className="cart">Book</button>
            </div>
          </div>
        </div>
        <Footer />
      </Box>
    </div>
  );
};

export default ServiceDetails;
