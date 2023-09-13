import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Link, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams();
  const Programming_and_Development = [
    {
      title: "Website Development",
      description:
        "1. Responsive Web Design \n2. User Interface(UI) and User Experience(UX) \n3. Search Engine Optimization (SEO)",
      image: require("../images/website.png"),
      field: "Web_Development",
    },
    {
      title: `Cyber Security Expert`,
      description:
        "1. Cyber Threat Landscape \n2. Risk Assessment and Management \n3. Security Consulting",
      image: require("../images/cybersecurity.jpg"),
      field: "CyberSecurity",
    },
    {
      title: "Software Development",
      description:
        "1. Custom Software Development \n2. Mobile App Development \n3. Enterprise Resource Planning (ERP) Solutions",
      image: require("../images/software.jpg"),
      field: "Software_Development",
    },
  ];

  const Electronics = [
    {
      title: "Electrical Technician",
      description:
        "1. Electrical Installation Services \n2. Electrical Upgrades and Renovations \n3. Energy Efficiency Solutions",
      image: require("../images/elec.avif"),
      field: "Electrical_Technician",
    },
  ];
  const HealthCare = [
    {
      title: "Senior support worker",
      description:
        "1. Personalized Care and Assistance \n2. Dementia and Alzheimer's Care \n3. Continuous Training and Development",
      image: require("../images/ssupport.jpg"),
      field: "Senior_support_worker",
    },
  ];

  const Project_Management = [
    {
      title: "Project Assistant",
      description:
        "1. Project Coordination \n2. Quality Assurance \n3. Documentation and Reporting",
      image: require("../images/proj.jpg"),
      field: "Project_Assistant",
    },
  ];
  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>
      <Box>
        {id === "Programming_and_Development" &&
          Programming_and_Development.map((detail) => (
            <Box className="services" bg="#7B70F6" rounded={"lg"}>
              <div className="details">
                <Box
                  className="big-img"
                  rounded={"lg"}
                  height={"200px"}
                  width={"350px"}
                >
                  <img src={detail.image} alt="" />
                </Box>

                <div className="box">
                  <Box className="row" marginLeft="30px">
                    <Text as="h2" fontSize="lg" textAlign="center">
                      {detail.title}
                    </Text>
                  </Box>

                  {detail.description.split("\n").map((i) => {
                    return <p>{i}</p>;
                  })}
                  <p>{detail.content}</p>
                  <Link to={`/WarriorSelection/${detail.field}`}>
                    <Button className="cart">Book</Button>
                  </Link>
                </div>
              </div>
            </Box>
          ))}
        {id === "Electronics" &&
          Electronics.map((detail) => (
            <Box className="services" bg="#7B70F6" rounded={"lg"}>
              <div className="details">
                <Box
                  className="big-img"
                  rounded={"lg"}
                  height={"200px"}
                  width={"350px"}
                >
                  <img src={detail.image} alt="" />
                </Box>

                <div className="box">
                  <Box className="row" marginLeft="30px">
                    <Text as="h2" fontSize="lg" textAlign="center">
                      {detail.title}
                    </Text>
                  </Box>

                  {detail.description.split("\n").map((i) => {
                    return <p>{i}</p>;
                  })}
                  <p>{detail.content}</p>
                  <Link to={`/WarriorSelection/${detail.field}`}>
                    <Button className="cart">Book</Button>
                  </Link>
                </div>
              </div>
            </Box>
          ))}
        {id === "Project_Management" &&
          Project_Management.map((detail) => (
            <Box className="services" bg="#7B70F6" rounded={"lg"}>
              <div className="details">
                <Box
                  className="big-img"
                  rounded={"lg"}
                  height={"200px"}
                  width={"350px"}
                >
                  <img src={detail.image} alt="" />
                </Box>

                <div className="box">
                  <Box className="row" marginLeft="30px">
                    <Text as="h2" fontSize="lg" textAlign="center">
                      {detail.title}
                    </Text>
                  </Box>

                  {detail.description.split("\n").map((i) => {
                    return <p>{i}</p>;
                  })}
                  <p>{detail.content}</p>
                  <Link to={`/WarriorSelection/${detail.field}`}>
                    <Button className="cart">Book</Button>
                  </Link>
                </div>
              </div>
            </Box>
          ))}
        {id === "HealthCare" &&
          HealthCare.map((detail) => (
            <Box className="services" bg="#7B70F6" rounded={"lg"}>
              <div className="details">
                <Box
                  className="big-img"
                  rounded={"lg"}
                  height={"200px"}
                  width={"350px"}
                >
                  <img src={detail.image} alt="" />
                </Box>

                <div className="box">
                  <Box className="row" marginLeft="20px">
                    <Text as="h2" fontSize="lg" textAlign="center">
                      {detail.title}
                    </Text>
                  </Box>

                  {detail.description.split("\n").map((i) => {
                    return <p>{i}</p>;
                  })}
                  <p>{detail.content}</p>
                  <Link to={`/WarriorSelection/${detail.field}`}>
                    <Button className="cart">Book</Button>
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
