import React from "react";
import { ButtonGroup, IconButton, Stack, Text, Box } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="#7B70F6" as="footer" role="contentinfo" px="90px" bottom="0">
      <Stack spacing={{ base: "4", md: "5" }}>
        <Stack justify="space-between" direction="row" align="center">
          <Text as="p">TaskWarriors</Text>

          <ButtonGroup variant="tertiary">
            <IconButton
              as="a"
              href="#"
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize="1.25rem" />}
            />

            <IconButton
              as="a"
              href="#"
              aria-label="GitHub"
              icon={<FaGithub fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="#"
              aria-label="Twitter"
              icon={<FaTwitter fontSize="1.25rem" />}
            />
          </ButtonGroup>
        </Stack>
        <Text fontSize="sm" color="fg.subtle" pb="5px">
          &copy; {new Date().getFullYear()} TaskWarriros, Inc. All rights
          reserved.
        </Text>
      </Stack>
    </Box>
  );
};

export default Footer;
