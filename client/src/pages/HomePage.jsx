import React from "react";
import Footer from "../components/footer";
import Hero from "../components/hero";
import HomeCards from "../components/homeCards";
import Navbar from "../components/navbar";
import { Box } from "@chakra-ui/react";
// import { Chatbot } from "react-chatbot-kit";
// import ActionProvider from "../components/chatbot/ActionProvider";
// import MessageParser from "../components/chatbot/MessageParser";
// import config from "../components/chatbot/config";
// import { ThemeProvider } from "styled-components";

// const theme = {
//   background: "#C9FF8F",
//   headerBgColor: "#197B22",
//   headerFontSize: "20px",
//   botBubbleColor: "#0F3789",
//   headerFontColor: "white",
//   botFontColor: "white",
//   userBubbleColor: "#FF5733",
//   userFontColor: "white",
//   floating: true,
// };

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="navbar">
        <Navbar />
      </div>
      <Box>
        <Box mb={"100px"}>
          <Hero />
          <HomeCards />
        </Box>
        <Footer />
      </Box>
    </div>
  );
};

export default HomePage;
